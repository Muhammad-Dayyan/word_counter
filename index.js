import inquirer from "inquirer";
const word = await inquirer.prompt([{
        type: "input",
        messege: "Enter the sentence",
        name: "sentence"
    }]);
const words = word.sentence;
const answer = words.trim().split("");
console.log(answer);
console.log(answer.length);
