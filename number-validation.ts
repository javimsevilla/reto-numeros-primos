export class NumberValidation {

    private static readonly NOT_A_NUMBER_MESSAGE = 'Input is not a number';
    private static readonly NOT_A_NATURAL_NUMBER_MESSAGE = 'Input is not a natural number';
    private static readonly MIN_NATURAL_NUMBER = 0;

    public static validateInputNumber(num: number): void {
        NumberValidation.validateIsNumber(num);
        NumberValidation.validateIsNaturalNumber(num);
    }

    private static validateIsNaturalNumber(num: number): void {
        if (NumberValidation.isNotNaturalNumber(num)) {
            throw new Error(NumberValidation.NOT_A_NATURAL_NUMBER_MESSAGE);
        }
    }

    private static validateIsNumber(num: number): void {
        if (NumberValidation.isNotNumber(num)) {
            throw new Error(NumberValidation.NOT_A_NUMBER_MESSAGE);
        }
    }

    private static isNotNaturalNumber(num: number): boolean {
        return num < NumberValidation.MIN_NATURAL_NUMBER;
    }

    private static isNotNumber(num: number): boolean {
    return Number.isNaN(num);
    }
}