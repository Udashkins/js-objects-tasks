// BEGIN
export default pick = (obj, massiv) => {
    const result = {};
    for (const mas of massiv) {
        if (Object.prototype.hasOwnProperty.call(obj, mas)) {
            result[mas] = obj[mas];
        }
    }
    
    return result;
}
// END