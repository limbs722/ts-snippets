// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function collatz(n: number) {
    let answer: number[] = [n];
    let curr: number = n;
    
    while (curr > 1) {
        if (curr % 2 === 0) {
            curr = curr / 2;
        } else {
            curr = (3 * curr) + 1;
        }
        answer = [...answer, curr];
    }

    return answer;
}