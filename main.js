document.getElementById("addButton").addEventListener('click', calculateAverage)
function calculateAverage()
{
    const firstNumber=Number(document.getElementById("firstNumber").value)
    const secondNumber=Number(document.getElementById("secondNumber").value)

    const averageOfNumbers=(firstNumber*secondNumber);

    document.getElementById("average").value = averageOfNumbers;
    
}