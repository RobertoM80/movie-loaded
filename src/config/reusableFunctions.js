export const getExerpt = (str, len) => {

    let exerpt = str.split(' ').slice(0, len);
    return exerpt.join(' ');

}