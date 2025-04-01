import _ from 'lodash';

// BEGIN
export default (massiv) => {
    if (massiv.length === 0) {
        return {};
    }
    const result = {};
    const part = massiv.split(" ");
    for (let name of part) {
        name = name.toLowerCase();
        if (result[name] === undefined) {
            result[name] = 1;
        } else {
            result[name] += 1;
        }
    }

    return result;
}
// END