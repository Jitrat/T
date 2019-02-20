function myfunction () {
    var pass = document.getElementById("psw").value;
    var repass = document.getElementById("re-psw").value;

    if(pass == ""){
        alert('input pass');
    }
    else{
        if(pass == repass){
        alert('complete');
        window.location.href = "https://www.youtube.com";
    }
    else{
        alert('pass and repass not match');
    }
    }

    
}