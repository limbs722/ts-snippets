// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function powNlog2(arr: number[]) {
    let answer = arr;
    
    while (true) {
        const sqrt = Math.log2(answer.length);
        
        if (sqrt % 1 === 0) {
            break;
        }
        
        answer.push(0);
    }
    
    return answer;
}