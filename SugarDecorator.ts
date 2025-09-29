import type { Coffee } from "./coffee.js";
import { CoffeeDecorator } from "./CoffeeDecorator.js";

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }

  description(): string {
    return super.description() + ", Sugar";
  }
}
