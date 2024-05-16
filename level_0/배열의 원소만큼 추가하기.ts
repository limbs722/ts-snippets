// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function addElement(arr: number[]) {
    let answer: number[] = [];
    
    arr.forEach((value) => {
        for (let i = 0; i < value; i++) {
            answer.push(value);
        }
    })
    
    return answer;
}