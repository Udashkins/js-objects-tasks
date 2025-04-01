// BEGIN
export default (obj) => {
    let names = [];
    for (const {name} of obj) {
        names.push(name);
    }
    return names.sort()
}

// END