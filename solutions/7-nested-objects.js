// BEGIN
export default (obj, keys) => {
let result = obj;
  for (const key of keys) {
       if (result.length === 0 || !Object.hasOwn(result, key)) {
           return null;
        }
        result = result[key];
    }

  return result;
}
// END