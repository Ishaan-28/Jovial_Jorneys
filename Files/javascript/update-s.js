function validation(){
    const email1=document.getElementById('email');
    const email2=document.getElementById('Email');
    const pass=document.getElementById('password');
    const pass1=document.getElementById('new-password');
    const form=document.getElementById('form');
    const numb=document.getElementById('number');
    const add=document.getElementById('address');
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;// The pattern is for password between length 8 to 15 containing atleast one no,uppercase letter and a special character .
    if(!pass1.value.match(decimal))
    {
        alert('Please enter a valid password');
        return false;
    }
    if(numb.value.length!=10)
    {
        alert('Please enter a valid number');
        return false;
    }
    if(add.value.length>40)
    {
        alert('You can add upto 40 characters only ');
        return false;
    }
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.value.length) 
        {
            alert("Enter valid email-ID");
            //EmailId.focus();
            return false;
           }
    return true;
    };