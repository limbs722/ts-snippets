// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function evenSum(n: number) {
    let answer = 0;
    
    for (let i = 0; i <= n; i += 2) {
        answer += i;
    }
    
    return answer;
}