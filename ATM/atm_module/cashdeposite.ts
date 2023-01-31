import inquirer from "inquirer";

async function cashDeposit(balance:number) {
    const answer = await inquirer.prompt([{
        name:"amount",
        type:"number",
        message:"Enter your amount: "
    }])
    console.log(balance);
    balance +=answer.amount;
    return balance;
}
export default cashDeposit;