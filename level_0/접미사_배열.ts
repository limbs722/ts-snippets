// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function suffixArray(my_string: string) {
    const answer = [];
    const len = my_string.length;
    
    for(let i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(i, len));
    }
    
    return answer.sort();
}