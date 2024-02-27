const myButton=document.getElementById("plusButton");
const gen=document.getElementById("gen");
function hi(){
    const ball=document.createElement('div');
    ball.className='colorBox';
    ball.style.backgroundColor=getHex();
    const container=document.getElementById('container');
    container.appendChild(ball);
}
function getHex(){

        // Define all possible hexadecimal characters
        const characters = '0123456789ABCDEF';
        
        // Initialize an empty string to store the hexadecimal color code
        let hexColor = '#';
        
        // Generate a random hexadecimal color code with six characters
        for (let i = 0; i < 6; i++) {
            hexColor += characters[Math.floor(Math.random() * 16)]; // Pick a random character from the characters array
        }
        
        return hexColor;
    
}
function getRandomColor(){
  const con= document.getElementsByClassName('colorBox');
    // alert(con.length)/
    for (let index = 0; index < con.length; index++) {
         con[index].style.backgroundColor = getHex();
        
    }
}
myButton.onclick=hi;
gen.onclick=getRandomColor;
