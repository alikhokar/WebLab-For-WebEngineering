let count = 0;
document.getElementById("count").innerHTML = localStorage.getItem( "counter" );
        
        function increment(){
            count++;
            document.getElementById("count").innerHTML = count;
            localStorage.setItem( "counter", JSON.stringify(count) );
        }
        
        function decrement(){
            if(count > 0){
                count--;
                document.getElementById("count").innerHTML = count;
                localStorage.setItem( "counter", JSON.parse(localStorage.getItem('counter')));
            } else {
                alert("The counter cannot be less than zero.");
            }
        }
