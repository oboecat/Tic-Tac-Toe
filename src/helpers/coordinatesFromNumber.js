export default function coordinatesFromNumber (n) {
    const r = ~~(n / 3), c = n % 3;
    return {r: r, c: c};
}