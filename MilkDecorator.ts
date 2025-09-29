import type { Coffee } from "./coffee.js";
import { CoffeeDecorator } from "./CoffeeDecorator.js";

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 2;
  }

  description(): string {
    return super.description() + ", Milk";
  }
}
