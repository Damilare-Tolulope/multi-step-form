export const areAllKeysFilled = (object) => {
    return Object.keys(object).every(key => {
        const value = object[key];
        return value !== undefined && value !== null && value !== "";
    });
}