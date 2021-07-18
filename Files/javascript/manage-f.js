function validation(){
    const numb=document.getElementById('flight-no');
    const name=document.getElementById('name');
    const type=document.getElementById('type');
    const timing=document.getElementById('timing');
    const form=document.getElementById('form');
    const src=document.getElementById('src');
    const des=document.getElementById('dest');
    const n=type.value;
    var types=["Premium","Economy","Buisness","First"];
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
    if(types.indexOf(n)===-1)
    {
        alert('Please Enter a valid Class');
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
    return true;
};