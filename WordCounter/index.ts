import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000)
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`-------- Lets start Program --------`);
    await sleep();
    rainbowTitle.stop();      
}

async function askQuestion() {

    let que = await inquirer.prompt([
        {
            name: "str",
            type: "input",
            message: chalk.rgb(22,33,44)("Please enter the paragraph you want to convert: ")
        }
    ]);

    let word_array = que.str.split(" ");
    let arr = word_array;
    console.log(word_array);
    console.log(arr.length);

    let spaceRemove = que.str.replace(/ /g, "")
    console.log(spaceRemove);
    console.log(spaceRemove.length);
}
async function startAgain() {
    await welcome();
    do {
        await askQuestion();
        var answer = await inquirer.prompt([{
            name: "restart",
            type: "input",
            message: "Do you want to restart? Press Y or N"
        }])
    } while (answer.restart == "y" || answer.restart == "yes" || answer.restart == "Y" || answer.restart == "YES");
}
startAgain();
