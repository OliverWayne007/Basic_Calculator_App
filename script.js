const firstNumInput = document.getElementById("firstNumInput");

const secondNumInput = document.getElementById("secondNumInput");

// console.log(secondNumInput.value);

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const body = document.body;


addButton.addEventListener("click" , () => {
    const firstInput = Number(firstNumInput.value);
    // console.log(firstInput , " " , typeof(firstInput));
    const secondInput = Number(secondNumInput.value);
    const result = firstInput + secondInput;
    alert(`The sum of the two numbers is: ${result}`);
});

subtractButton.addEventListener("click" , () => {
    const firstInput = Number(firstNumInput.value);
    const secondInput = Number(secondNumInput.value);
    const result = firstInput - secondInput;
    alert(`The difference of the two numbers is: ${result}`);
});

multiplyButton.addEventListener("click" , () => {
    const firstInput = Number(firstNumInput.value);
    const secondInput = Number(secondNumInput.value);
    const result = firstInput * secondInput;
    alert(`The product of the two numbers is: ${result}`);
});

divideButton.addEventListener("click" , () => {
    const firstInput = Number(firstNumInput.value);
    const secondInput = Number(secondNumInput.value);
    if(secondInput === 0)
    {
        alert("Division by 0 is not defined !!!");
    }
    else
    {
        const result = firstInput/secondInput;
        alert(`The quotient of the two numbers is: ${result}`);
    }
});