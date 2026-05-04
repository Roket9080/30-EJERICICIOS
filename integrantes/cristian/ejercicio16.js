export function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;

    let suma = 0;

    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }

    return suma / numbers.length;
}