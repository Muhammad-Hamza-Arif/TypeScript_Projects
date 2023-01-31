#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Number Guessing Game');
    await sleep();
    rainbowTitle.stop();
}
// await welcome();

function validateInput(number: any) {
    if (isNaN(number)) {
        return "Please enter a valid number";
    } else {
        return true;
    }
}
let playerLife = 3;
async function askQuestions() {
    let randomNumber: number = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(`Player left life ${playerLife}`)
        var question = await inquirer.prompt([
            {
                type: "number",
                name: "use_num",
                message: "Select any number between 1 - 10 : ",
                // validate: validateInput
            }
        ]);
        // console.log(question);
        if (question.use_num === randomNumber) {
            console.log(chalk.green(`Congratulation!! You guess the right number`));
        }
        else if (randomNumber > question.use_num) {
            console.log(chalk.green(`Your number ${question.use_num} is less than guess number`));
        }
        else if (randomNumber < question.use_num) {
            console.log(chalk.green(`Your number ${question.use_num} is greater than guess number`));
        }
    } while (playerLife > 0 && randomNumber !== question.use_num);
    if (playerLife == 0 && randomNumber !== question.use_num) {
        console.log(chalk.blue(`GAME OVER!`))
    }
};
// askQuestions();

async function againStart() {
    do {
        console.clear();
        await welcome();
        playerLife = 3;
        await askQuestions();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? press y or n: "
            }
        ])
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
againStart();