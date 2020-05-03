import { ValidationResult } from "./validation-result";
import { ValidationType } from "./validation-type.enum";
import { isNullOrUndefined } from "util";
import { ValidationInput } from "./validation-input";

export class Validation {
    results: ValidationResult[] = [];
    inputs: ValidationInput[] = [];
    public addField(input: ValidationInput, value?: any): Validation {
        input.value = value;
        this.inputs.push(input);
        return this;
    }

    validate(input: ValidationInput, value: string) {
        var result = new ValidationResult(true);
        var stringify = isNullOrUndefined(value) ? '' : value + '';
        switch (input.type) {
            case ValidationType.Required:
                result = new ValidationResult(stringify.length > 0, `${input.display} is required`);
                break;
            case ValidationType.LessThan:
                result = new ValidationResult(stringify < input.value && stringify.length > 0, `${input.display} should be less than ${input.value}`);
                break;
            case ValidationType.GreaterThan:
                result = new ValidationResult(stringify > input.value, `${input.display} should be greater than ${input.value}`);
                break;
            case ValidationType.Between:
                result = new ValidationResult(stringify < input.value && stringify > '0', `${input.display} should be between 0 and ${input.value}`);
                break;
            case ValidationType.Date:
                var today = Date.now();
                result = new ValidationResult(new Date(today).getTime() >= input.value && stringify > '0', `Invalid Date`);
                break;
        }
        return result;
    }

    validateAll(form: any) {
        this.results = [];
        this.inputs.forEach(input => this.results.push(this.validate(input, form[input.name])))
    }

    public isValid(form: any): boolean {
        this.validateAll(form);
        return this.results.some((s) => !s.isValid);
    }

    public getError(): string {
        var result = this.results.find(f => !f.isValid);
        if (result == null) return '';
        return result.errorMessage;
    }
}