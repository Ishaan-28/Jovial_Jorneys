function validation(){
    const name=document.getElementById('name');
    const numb=document.getElementById('number');
    const add=document.getElementById('address');
    const age=document.getElementById('dob');
    const pcode=document.getElementById('pin-code');
    const form=document.getElementById('form');
    const email=document.getElementById('Email');
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    const nameval=/^[a-zA-Z\s]*$/;
    const dobpattern = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
     if(name.value.length<=4)
     {
       // name.focus();
        alert('Name is too short'); 
        return false;
     }
     if(name.value.length>20)
     {
        alert('Name is too long');
        return false;
     }
      if(!name.value.match(nameval))
      {
         alert('Please enter a valid name');
        return false;
     }
     if(numb.value.length!=10)
     {
       // numb.focus();
        alert('Plese enter a valid number of 10 digits');
        return false;
     }
    //  if(!age.value.match(dobpattern))
    //  {
    //     alert('Enter a valid DOB');
    //     return false;
    //  }
     if(pcode.value.length!=6)
     {
        alert('Enter a valid pin Code of 6 digits');
        return false;
     }
     if(add.value.length>40)
     {
        alert('You can add upto 40 characters only');
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