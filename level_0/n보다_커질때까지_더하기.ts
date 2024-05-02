// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function tillAddN(numbers: number[], n: number) {
    let answer = 0;
    
    for (const num of numbers) {
        answer += num;
        if (answer > n) {
            break;
        }
    }
    
    return answer;
}