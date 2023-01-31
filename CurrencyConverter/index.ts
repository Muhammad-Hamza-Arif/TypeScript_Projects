#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const UsdtoPkr = 228.43;
const PkrtoUsd = 0.0044;
const EutoPkr = 239.85;
const PkrtoEu = 0.0042;
const EutoUsd = 1.05;
const UsdtoEu = 0.95;

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

async function currenceyConverter() {
    let answer = await inquirer.prompt([
        {
            name: "currencyfrom",
            type: "list",
            choices: ["USD","PKR","EU"],
            message: "Select from which currency you want to convert? "
        },
        {
            name: "currencyto",
            type: "list",
            choices: ["USD","PKR","EU"],
            message: "Select to which currency you want to convert? "
        },
        {
            name: "amount",
            type: "input",
            message: "Please enter the amount: "
        }
    ]);

    switch (answer.currencyfrom) {
        case "USD":
            if (answer.currencyto === "PKR") {
                let newAmount = answer.amount * UsdtoPkr;
                console.log(newAmount);
            }
            break;
        case "USD":
            if (answer.currencyto === "EU") {
                let newAmount = answer.amount * UsdtoEu;
                console.log(newAmount);
            }
            break;
        case "PKR":
            if (answer.currencyto === "USD") {
                let newAmount = answer.amount * PkrtoUsd;
                console.log(newAmount);
            }
            break;
        case "PKR":
            if (answer.currencyto === "EU") {
                let newAmount = answer.amount * PkrtoEu;
                console.log(newAmount);
            }
            break;
        case "EU":
            if (answer.currencyto === "PKR") {
                let newAmount = answer.amount * EutoPkr;
                console.log(newAmount);
            }
        case "EU":
            if (answer.currencyto === "USD") {
                let newAmount = answer.amount * EutoUsd;
                console.log(newAmount);
            }
            break;
        default:
            break;
    }
}
async function Repeat() {
    await welcome();
do {
    await currenceyConverter();
        var answer = await inquirer.prompt([
            {
                name:"repeat",
                type:"list",
                choices:["Yes","No"],
                message:"Do you want to repeat? "
            }
        ])
    }while (answer.repeat === "Yes");
}




// currenceyConverter();
Repeat()
