#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

function sleep(){
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Lets Start Calculator`);
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)
}
// welcome();

function validateInput(input:any){
    if(isNaN(input)) {
        return "Please enter valid number";
    } else{
        return true;
    }
};

let tryAgain = true;
async function askQuestion() {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstNumber",
            message: "please enter the first number",
            validate: validateInput
        },
        {
            type: "list",
            name: "operation",
            message: "which operation you want to perform? ",
            choices: ["+","-","*","/","%","^"]
        },
        {
            type: "input",
            name: "secondNumber",
            message: "please enter the second number",
            validate: validateInput
        }
    ]);

    switch(answers.operation){
        case "+":
            console.log(`Result: ${answers.firstNumber+answers.secondNumber}`);
            break
        case "-":
            console.log(`Result: ${answers.firstNumber-answers.secondNumber}`);
            break
        case "*":
            console.log(`Result: ${answers.firstNumber*answers.secondNumber}`);
            break
        case "/":
            console.log(`Result: ${answers.firstNumber/answers.secondNumber}`);
            break
        case "%":
            console.log(`Result: ${answers.firstNumber%answers.secondNumber}`);
            break
        case "^":
            console.log(`Result: ${Math.pow(answers.firstNumber, answers.secondNumber)}`);
            break
        default:
            break
    };

    const Checkconfirm = await inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Do you want to start again?"
        }
    ]);
    tryAgain = Checkconfirm.again;
};

async function restart() {
    do {
        await welcome();
        await askQuestion();
    } while (tryAgain);
}
restart();