const myButton=document.getElementById("btn1");
function hi(){
    //alert("hey there i am  game alert");
    const ball=document.createElement('div');
    ball.className='ball';
    const container=document.getElementById('container');
    container.appendChild(ball);
}
if(myButton==hi){
    //do nothing
}
else{
    myButton.onclick= hi;
}
