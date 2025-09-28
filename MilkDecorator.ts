import type { Coffee } from "./coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 2;
  }

  description(): string {
    return super.description() + ", Milk";
  }
}
