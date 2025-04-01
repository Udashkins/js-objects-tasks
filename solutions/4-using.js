import { result } from "lodash";

// BEGIN
export default getDomainInfo = (website) => {
    const result = {};
    if (website.startsWith('https')) {
        result.scheme = 'https';
        result.name = website.replace('https://', '');
    } else {
        result.scheme = 'http';
        result.name = website.replace('http://', '');
    }
    return result;
}
// END