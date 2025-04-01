import _ from 'lodash';

// BEGIN
export default (obj, key, data) => {
    if (key.length === 0) {
        return Object.assign(obj, data);
    }
    return Object.assign(obj, _.pick(data, key));
    
}
// END