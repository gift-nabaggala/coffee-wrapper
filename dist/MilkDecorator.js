import { CoffeeDecorator } from "./CoffeeDecorator.js";
export class MilkDecorator extends CoffeeDecorator {
    cost() {
        return super.cost() + 2;
    }
    description() {
        return super.description() + ", Milk";
    }
}
//# sourceMappingURL=MilkDecorator.js.map