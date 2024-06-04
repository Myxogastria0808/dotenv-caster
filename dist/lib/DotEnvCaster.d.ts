export declare class DotEnvCaster {
    castString(constant: string | undefined): string;
    castNumber(constant: string | undefined): number;
    castBigInt(constant: string | undefined): bigint;
    castSymbol(constant: string | undefined): symbol;
    castBoolean(constant: string | undefined): boolean;
    castNull(constant: string | undefined): null;
}
