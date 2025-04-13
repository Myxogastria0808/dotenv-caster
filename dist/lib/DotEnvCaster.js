"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotEnvCaster = void 0;
class DotEnvCaster {
    castString(constant) {
        if (typeof constant === 'string') {
            return constant;
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
    castNumber(constant) {
        if (typeof constant === 'string') {
            const result = Number(constant);
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('This constant can not convert to number.');
            }
            return result;
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
    castBigInt(constant) {
        if (typeof constant === 'string') {
            try {
                return BigInt(constant);
            }
            catch (_e) {
                throw new Error('This constant can not convert to bigint.');
            }
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
    castSymbol(constant) {
        if (typeof constant === 'string') {
            return Symbol(constant);
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
    castBoolean(constant) {
        if (typeof constant === 'string') {
            if (!(constant === 'true' || constant === 'false')) {
                throw new Error('This constant can not convert to boolean.');
            }
            return Boolean(constant);
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
    castNull(constant) {
        if (typeof constant === 'string') {
            if (constant === 'null') {
                return null;
            }
            else {
                throw new Error('This constant can not convert to null.');
            }
        }
        else {
            throw new Error('This type of constant is undefined. You have to set the string value in this constant.');
        }
    }
}
exports.DotEnvCaster = DotEnvCaster;
//# sourceMappingURL=DotEnvCaster.js.map