// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function makeArray1(n: number, k: number) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            answer.push(i);
        }
    }
    
    return answer.sort((a, b) => a - b);
}