function validate()
{
    let myname = document.getElementById("name").ariaValueMax;
    let myemail = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let confimPasword = document.getElementById("cnfpsw").value;
    console.log(myname , myemail, password, confimPasword);


    if(myname == " " || myemail == " "|| password== " "|| confimPasword == " ")
    {
        alert("All field are required");
        return false;
    }
}