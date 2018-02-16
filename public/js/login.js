function loginFunction()
{
    var input_username= document.getElementById("username").value;
    var input_password= document.getElementById("password").value;
    
    //username = sampleUser
    //password = samplePassword
    
    if (input_username == "sampleUser" && input_password == "samplePassword")
    {
        console.log("match");
        window.location.assign("secondpage.html")
    }
    else
    {
        console.log("no match");
    }
    
}