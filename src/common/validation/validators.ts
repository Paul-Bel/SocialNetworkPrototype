export type FieldValidatorType = (value: string) => string|undefined
export const required: FieldValidatorType = (value) => value ? undefined : 'Fild is required'

export const maxLength = (maxLength: number): FieldValidatorType => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
