export const requiredField = (value: any) => {
    if (value) return undefined;
    return 'Field is required';
};

//VC means 'validator creator'
export const maxLengthVC = (maxLength: number) => (value: any) => {
    if (value && value.length <= maxLength) return undefined;
    return `Max length (${maxLength} symbols) is exceeded`;
};

export const minLengthVC = (minLength: number) => (value: any) => {
    if (value && value.length >= minLength) return undefined;
    return `Min length (${minLength} symbols) is not reached`;
};