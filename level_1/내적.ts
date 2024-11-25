// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function innerProduct(a: number[], b: number[]): number {
    let answer = 0;
    
    a.forEach((v, i) => {
        answer = answer + (v * b[i]);
    });
    
    return answer;
}