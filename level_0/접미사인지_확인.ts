// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function isSuffix(my_string: string, is_suffix: string) {
    const suffixArr = [];
    const len = my_string.length;
    
    for (let i = 0; i < len; i++) {
        suffixArr.push(my_string.slice(i, len));
    }
    
    return suffixArr.includes(is_suffix) ? 1 : 0;
}