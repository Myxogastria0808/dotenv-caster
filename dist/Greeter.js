"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    checkIsString(constant) {
        if (typeof constant === 'string') {
            return constant;
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
}
exports.Greeter = Greeter;
//# sourceMappingURL=Greeter.js.map