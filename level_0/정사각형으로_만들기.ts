// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function makeSquare(arr: number[][]) {
    let answer = arr;
    const row = answer.length;
    const col = answer[0].length;
    
    if (col < row) {
        for(let i=0; i < row; i++) {
            for(let j=0; j < (row - col); j++) {
                answer[i].push(0);
            }
        }
    } else if (col > row) {
        for (let i = 0; i < (col - row); i++) {
            answer.push(Array(col).fill(0));
        }
    }

    return answer;
}