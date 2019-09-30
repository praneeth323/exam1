document.getElementById("addButton").addEventListener('click', calculateAverage)
function calculateAverage()
{
    const firstNumber=Number(document.getElementById("firstNumber").value)
    const secondNumber=Number(document.getElementById("secondNumber").value)
    const thirdNumber=Number(document.getElementById("thirdNumber").value)
    const averageOfNumbers=(firstNumber+secondNumber+thirdNumber)/3;

    document.getElementById("average").value = averageOfNumbers;
    
}