// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function hateEven(n: number) {
    let answer = [];
    
    for(let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            answer.push(i);
        }
    }
    
    return answer;
}