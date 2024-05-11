// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function groupingString(strArr: string[]) {
    let answer = {};
    
    strArr.forEach((str) => {
        answer[str.length] = answer[str.length] + 1 || 1;
    });
    
    return Math.max(...Object.values(answer));
}