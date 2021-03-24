
function updateDisplay(newValue){
    // find the display box
    var d = document.getElementById('display');
    //var newValue = eval; 
          var validInput = true;    
    switch (newValue){
        case '':
            d.innerHTML = '';
            break;
        case '0':
        case '1': 
        case '2':
        case '3':
        case '4':
        case '5': 
        case '6': 
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
           if (validInput !== false){
            d.innerHTML += newValue;
            validInput = false   
           }

            break;

            case '=':
                break;
        }
   
}