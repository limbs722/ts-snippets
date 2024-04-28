// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function nearByOne(arr: number[], idx: number) {
    let answer = -1;
    
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            answer = i;
            break;
        }
    }
    
    return answer;
}