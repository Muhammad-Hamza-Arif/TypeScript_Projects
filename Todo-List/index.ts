#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";



figlet('TODO LIST', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellowBright(data))
});



const todolist :string[] = [];



async function RepeatFlow(){
    const answer = await inquirer.prompt([{
        name:"Repeat",
        type:"list",
        choices:["Yes","No"],
        message:"Which you want another operation"
    }])
    return (answer.Repeat === "Yes")?true:false;
}

async function TodoList(){
    let startAgain = true;
    do{

    const answer = await inquirer.prompt([{
        name: "option",
        type: "list",
        choices: ["Add Item", "Display", "Remove Item"],
        message: "What you want to do?"
    }]);

    if (answer.option == "Add Item") {
        const item = await inquirer.prompt([{
            name: "newitem",
            type: "input",
            message: "Enter new item"
        }]);
        todolist.push(item.newitem);
        startAgain = await RepeatFlow();
    }
    else if(answer.option == "Display"){
        if(todolist.length == 0){
            console.log("Your List is Empty")
        }
        todolist.forEach(element => console.log(element));
        startAgain = await RepeatFlow();
    }
    else if(answer.option == "Remove Item"){
        const removeItem = await inquirer.prompt([{
            name:"item",
            type:"input",
            message:"which item you want to remove"
        }]);

        let index = todolist.indexOf(removeItem.item)
        console.log(index);

        if(index !== -1){
            todolist.splice(index,1)
        }
        startAgain = await RepeatFlow();
    }
}while(startAgain !== false)
}

setTimeout(()=>{
    TodoList();
},1000) 