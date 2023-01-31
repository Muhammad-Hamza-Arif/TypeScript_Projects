import inquirer from "inquirer";


async function otherAmount(balance: number) {
    const otheramt = await inquirer.prompt([{
        name: "otheramount",
        type: "number",
        message: "Please enter your amount: "
    }])
    console.log(balance);
    if (balance > otheramt.otheramount) {
        balance -= otheramt.otheramount;
        console.log(balance);
    } else {
        console.log("You have insufficient balance");
        balance = await otherAmount(balance)
    }
    return balance;
}
async function cashWithDraw(balance: number) {
    const answer = await inquirer.prompt([{
        name: "amount",
        type: "list",
        message: "Please select your amount: ",
        choices: ["500", "1000", "2000", "5000", "10000", "otheramount"]
    }]);

    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
            break;
        case "1000":
            if (balance > Number(answer.amount)) {
                balance -= 1000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
            break;
        case "2000":
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
            break;
        case "5000":
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
            break;
        case "10000":
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`Your new balance is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
            break;
        case "otheramount":
            balance = await otherAmount(balance)
            console.log(`Your new balance is ${balance}`);
            break;

        default:
            break;
    }
    return balance;
}

export default cashWithDraw;