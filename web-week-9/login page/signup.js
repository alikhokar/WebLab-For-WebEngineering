const checkButton=document.getElementById("submit");
checkButton.addEventListener('click',function(){
    let name = document.querySelector("#username").value;
    if(name == ""){
        alert("Please enter your name!");
        return false;
    }
    let password = document.querySelector("#password").value;
    if(password == ""){
        alert("Please enter your password");
        return false;
    }
    const data={}
    data["username"] = name;
    data["password"] = password; 
    localStorage.setItem('data', JSON.stringify(data));
    alert("data has been stored");
   if(name !="" && password!="")
    {
    document.getElementById('username').value='';
    document.getElementById('password').value='';
    //window.open('index.html','_blank');
    }
});
