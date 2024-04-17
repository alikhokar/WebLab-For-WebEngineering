
const signinButton=document.getElementById("signin");
signinButton.onclick=()=>{
    let userData =JSON.parse(localStorage.getItem('data'));
    console.log(userData);
     if (userData != null) {
       if( document.querySelector('#uname').value == userData['username'] && document.querySelector('#pwd').value == userData['password']){
        alert('successfully login');
       }
       else {
        alert('try again');
      }
       
     } else {
       alert('try again');
     }
};
