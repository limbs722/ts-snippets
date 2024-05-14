// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function specialArray1(n: number) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
        answer.push(arr);
    }
    
    return answer;
}