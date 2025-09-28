import type { Coffee } from "./coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }

  description(): string {
    return super.description() + ", Sugar";
  }
}
