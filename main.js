import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly inter your first number:"
    }, {
        type: "number",
        name: "numberTwo",
        message: "kindly inter your second number:"
    }, {
        type: "list",
        name: "operator",
        choices: ["addition(+)", "subraction((-)", "multiplication(*)", "division(/)"],
        message: "select your operator:"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "addition(+)") {
        result = numberOne + numberTwo;
    }
    else if (operator === "subraction(-)") {
        result = numberOne - numberTwo;
    }
    if (operator === "multiplication(*)") {
        result = numberOne * numberTwo;
    }
    if (operator === "division(/)")
        result = numberOne / numberTwo;
    console.log("your result is ", result);
}
else {
    console.log("kindly enter valid input");
}
