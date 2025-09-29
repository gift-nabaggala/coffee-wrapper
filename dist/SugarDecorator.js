import { CoffeeDecorator } from "./CoffeeDecorator.js";
export class SugarDecorator extends CoffeeDecorator {
    cost() {
        return super.cost() + 1;
    }
    description() {
        return super.description() + ", Sugar";
    }
}
//# sourceMappingURL=SugarDecorator.js.map