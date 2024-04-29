// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function stringCount(my_string: string) {    
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const result = Array(52).fill(0);
    
    [...my_string].forEach((i) => {
        result[alpha.indexOf(i)] += 1;
    });
    
    return result;
}