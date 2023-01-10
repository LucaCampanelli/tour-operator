function controllaform() {
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
    if(password==""){
    document.getElementById("messaggiopassword").style.display="block";
    document.getElementById("password").style.border="2px red solid";
    
    }else{
    document.getElementById("messaggiopassword").style.display="none";
    document.getElementById("password").style.border="1px black solid";
    }
    
    if(email==""){
    document.getElementById("messaggioemail").style.display="block";
    document.getElementById("email").style.border="2px red solid";
    
    }else{
    document.getElementById("messaggioemail").style.display="none";
    document.getElementById("email").style.border="1px black solid";
    
    }
    }
    
    
    function controllaregistrazione() {
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let nomecognome=document.getElementById("nomecognome").value;
    
    if(password==""){
    document.getElementById("messaggiopassword").style.display="block";
    document.getElementById("password").style.border="2px red solid";
    
    }else{
    document.getElementById("messaggiopassword").style.display="none";
    document.getElementById("password").style.border="1px black solid";
    }
    
    if(email==""){
    document.getElementById("messaggioemail").style.display="block";
    document.getElementById("email").style.border="2px red solid";
    
    }else{
    document.getElementById("messaggioemail").style.display="none";
    document.getElementById("email").style.border="1px black solid";
    
    }
    
    if(nomecognome==""){
    document.getElementById("messaggionomecognome").style.display="block";
    document.getElementById("nomecognome").style.border="2px red solid";
    
    }else{
    document.getElementById("messaggionomecognome").style.display="none";
    document.getElementById("nomecognome").style.border="1px black solid";
    }
    }
    