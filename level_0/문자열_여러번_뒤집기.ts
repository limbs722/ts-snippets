// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function stringReverse(my_string: string, queries: number[][]) {
    let str = my_string;
    for(let q of queries) {
        let strArr = str.split('');
        const [s, e] = q;
        const reverseArr = strArr.slice(s, e + 1).reverse().join('');
        str = strArr.slice(0, s).join('') + reverseArr + strArr.slice(e + 1).join('');
    }
    return str;
}