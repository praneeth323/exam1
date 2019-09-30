
function calculateAverage()
{
    const firstNumber=parseInt(document.getElementById("firstNumber").value)
    const secondNumber=parseInt(document.getElementById("secondNumber").value)

    const averageOfNumbers=(firstNumber*secondNumber);

    document.getElementById("average").innerHTML ="estimated space:"+averageOfNumbers;
    
}