// Author sidekick9497
window.onload = function()
{
  
    var buttonAdd =  document.getElementById("add");
    var buttonSubtract =  document.getElementById("subtract");
    var buttonMultiply =  document.getElementById("multiply");
    var buttonDivide =  document.getElementById("divide");
    var buttonReset =  document.getElementById("reset");
    this.console.log("script running");
    buttonAdd.addEventListener('click',calc)
    buttonSubtract.addEventListener('click',calc)
    buttonMultiply.addEventListener('click',calc)
    buttonDivide.addEventListener('click',calc)
    buttonReset.addEventListener('click',reset)
    
}
function calc()
{   var result = null;
    console.log("button clicked");
    var sign = this.innerHTML;
    console.log(sign);
    var inputData = getInputs();
    var numberOne = parseInt (inputData[0]);
    var number_two = parseInt(inputData[1]);
    if(validate(inputData))
    {
        switch(sign)
        {
            case '+':
                console.log("addition performed")
                result = numberOne + number_two;break;
            case "-":
                console.log("subtration performed")
                result = numberOne - number_two; break;
            case "/":
                console.log("division performed")
                result = numberOne / number_two; break;
            case "*":
                console.log("multiplication performed")
                result = numberOne * number_two; break;
            default:
                console.log("invalid method");break;

        }
        document.getElementById("info").innerHTML = "";
    }

    console.log(result)
    console.log(inputData);
    if(result)
    {
        document.getElementById("result").value = result;  
    }

}


function getInputs()
{
    var inputOne =  document.getElementById("number_one");
    var inputTwo = document.getElementById("number_two");

    var numberOne = inputOne.value;
    var number_two= inputTwo.value;
    return [numberOne,number_two];
}
function validate(inputs)
{   
    console.log(inputs);
    if(inputs[0]=="")
    {   
        console.log("empty input one");
        document.getElementById("info").innerHTML  = "Enter number one"
        return false
    }   
    else if(inputs[1]=="")
    {   
        console.log("empty input two");
        document.getElementById("info").innerHTML  = "Enter number two"
        return false
    }
    if(isNaN(inputs[0]) || isNaN(inputs[1]))
    {   
        console.log("invalid inputs")
        document.getElementById("info").innerHTML = "invalid inputs"
        return false;
    }  
    return true;
}
 
function reset()
{
    document.getElementById("info").innerHTML = "";
    document.getElementById("number_one").value = "";
    document.getElementById("number_two").value = "";
    document.getElementById("result").value = "";
}