import inquirer from "inquirer";
import cashWithDraw from "./atm_module/cashwithdraw.js";
import cashDeposit from "./atm_module/cashdeposite.js";

async function anotherTransaction() {
    const answer = await inquirer.prompt([{
        name:"anothTrans",
        type:"list",
        message:"Do you want another transaction: ",
        choices:["Yes","No"]
    }])
    return answer.anothTrans
}
async function mainScreen(balance:number) {
do {
    
        let options = await inquirer.prompt([{
            name: "menu",
            type: "list",
            message: "Please select your transaction type: ",
            choices: ["Balance Inquiry", "Cash Withdraw", "Cash Deposit", "Transfer", "Utility Bills", "Exit"]
        }]);
    
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(`Your current balance is: ${balance}`);
                break;
            case "Cash Withdraw":
                var pre_balance = balance;
                balance = await cashWithDraw(balance);
                if(pre_balance > balance){
                console.log(`Your transaction is successfully new balance is ${balance}`);}
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(`Your deposite amount is successfully new balance is ${balance}`);
                break;
            case "Transfer":
                console.log("Transfer");
                break;
            case "Utility Bills":
                console.log("Utility Bills");
                break;
            case "Exit":
                console.log("Exit");
                break;
            default:
                break;
        }
    var anothertran = await anotherTransaction();
    }while(anothertran != "No")
} 

export default mainScreen;