// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function emyptyArrAddRemove(arr: number[], flag: boolean[]) {
    let answer: number[] = [];
    
    arr.forEach((value, idx) => {
        if (flag[idx]) {
            for (let i = 0; i < (value * 2); i++) {
                answer.push(value);
            }
        } else {
            for (let i = 0; i < value; i++) {
                answer.pop();
            }
        }
    })
    return answer;
}