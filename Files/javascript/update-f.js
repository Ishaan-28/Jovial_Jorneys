function validation(){
    const numb=document.getElementById('current-no');
    const name=document.getElementById('name');
    const src=document.getElementById('new-sou');
    const des=document.getElementById('new-dest');
    const nameval=/^[a-zA-Z\s]*$/;
    if(numb.value.length!=6)
    {
        alert('Please Enter a valid flight number of length 6');
        return false;
    }
    if(name.value.length<6)
    {
        alert('Flight name is too small.Length should be greater than 6');
        return false;
    }
    if(name.value.length>20)
    {
        alert('Flight name is too big. Length should be less than 20');
        return false;
    }
    if(!src.value.match(nameval))
    {
        alert("Source City name should contain letters only");
        return false;
    }
    if(!des.value.match(nameval))
    {
        alert('Destination City name should contain letters only');
        return false;
    }
    if(src.value===des.value)
    {
        alert("Source and Destination can't be same");
        return false;
    }
}