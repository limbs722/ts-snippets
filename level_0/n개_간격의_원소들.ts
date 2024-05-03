// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function intervalN(num_list: number[], n: number) {
    let result = [];
    
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list[i]);
    }
    
    return result;
}