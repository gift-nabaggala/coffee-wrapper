import * as readline from "readline";
import { SimpleCoffee } from "./SimpleCoffee.js";
import { MilkDecorator } from "./MilkDecorator.js";
import { SugarDecorator } from "./SugarDecorator.js";
import type { Coffee } from "./coffee.js";

let coffee: Coffee = new SimpleCoffee();

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n--- Coffee Shop Menu ---");
  console.log("1. Add Milk (+$2)");
  console.log("2. Add Sugar (+$1)");
  console.log("3. Finish Order");
  console.log("-----------------------------------------");
  console.log("Current: " + coffee.description() + " => $" + coffee.cost());
}

function ask() {
  showMenu();
  r1.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        coffee = new MilkDecorator(coffee);
        break;
      case "2":
        coffee = new SugarDecorator(coffee);
        break;
      case "3":
        console.log(
          "\n Final Order:" + coffee.description() + " => $" + coffee.cost()
        );
        r1.close();
        return;
      default:
        console.log("X Invalid option, try again.");
    }
    ask();
  });
}

console.log("Welcome to the Coffee Shop!");
ask();
