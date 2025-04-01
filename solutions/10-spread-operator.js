// BEGIN
export default (name, date = {}) => {
    const result = {
        state: 'moderating',
        createdAt: Date.now()
    };
    return {name, ...result, ...date};
}

// END