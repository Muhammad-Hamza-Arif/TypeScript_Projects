import inquirer from "inquirer";
import mainScreen from "../mainscreen.js";
import users from "./users.js";

async function login() {

    const answer = await inquirer.prompt([{
        name: "accountNumber",
        type: "number",
        message: "Please enter your account number "
    },
    {
        name: "pin",
        type: "password",
        message: "Enter your pincode"
    }]);

    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);

    if (typeof user != "undefined") {
        console.log("Log in")
        mainScreen(user.balance)
    } else {
        console.log("You enter invalid pin or account number");
    }
}
export default login;