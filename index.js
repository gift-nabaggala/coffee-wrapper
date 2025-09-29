"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var SimpleCoffee_js_1 = require("./SimpleCoffee.js");
var MilkDecorator_js_1 = require("./MilkDecorator.js");
var SugarDecorator_js_1 = require("./SugarDecorator.js");
var coffee = new SimpleCoffee_js_1.SimpleCoffee();
var r1 = readline.createInterface({
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
    r1.question("Choose an option: ", function (choice) {
        switch (choice) {
            case "1":
                coffee = new MilkDecorator_js_1.MilkDecorator(coffee);
                break;
            case "2":
                coffee = new SugarDecorator_js_1.SugarDecorator(coffee);
                break;
            case "3":
                console.log("\n Final Order:" + coffee.description() + " => $" + coffee.cost());
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
