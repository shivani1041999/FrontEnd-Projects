var buttons = document.getElementsByTagName('button');
var displayc = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;


for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){

        var value = this.getAttribute('value');
        if((value == '+'|| value == '-' || value == '*' || value == '/') && displayc.textContent != "Error" && displayc.textContent != NaN){
        
            operator = value;
            if(Number(displayc.textContent) != 0){
            operand1 = parseFloat(displayc.textContent);
            }
            console.log(operand1);
            displayc.innerHTML = null;

        }else if(value == '=' && displayc.textContent != "Error" && displayc.textContent != NaN){
             operand2 = parseFloat(displayc.textContent);
            
             if(operand2 == 0 && operator == '/'){
                displayc.innerText = "Error";

             }//else if(operator != null){
             var result = eval(operand1 + " " + operator + " " + operand2);
            
             // displayc.innerText = result;
             // }
              if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
           

        }else if(value == 'AC' ){
            displayc.innerText = 0;
        }else if(value == '+/-' && displayc.textContent != "Error" && displayc.textContent != NaN){
            var k = displayc.innerText;
           
            if(k > 0){
                displayc.innerText = -k;
            }else{
                 displayc.innerText = -k;
            }
        }else if(value == '%' && displayc.textContent != "Error" && displayc.textContent != NaN){
            var k = parseFloat(displayc.textContent);
            var result = eval (k + " " + '/' + " " + '100');
            displayc.innerText = result;

        }else if(value == 'x' && displayc.textContent != "Error" && displayc.textContent != NaN){
            var k = parseFloat(displayc.textContent);
            var result = parseInt(k / 10);
            displayc.innerText = result;

        }else if(displayc.textContent != "Error" && displayc.textContent != NaN){
            var k = parseFloat(displayc.textContent);
            if(k == 0){
                displayc.innerText = null;
            }
            // displayc.innerText = null;
            displayc.innerText += value;
        }

       
    });
}

 

