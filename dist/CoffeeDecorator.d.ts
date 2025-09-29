import type { Coffee } from "./coffee.js";
export declare abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
    constructor(coffee: Coffee);
    cost(): number;
    description(): string;
}
//# sourceMappingURL=CoffeeDecorator.d.ts.map