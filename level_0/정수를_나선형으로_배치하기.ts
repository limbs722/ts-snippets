// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function spiralPositioning(n: number) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));

    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;

    let count = 1;
    
    while (count <= (n * n)) {
        for (let i = startCol; i <= endCol; i++) {
            answer[startRow][i] = count;
            count++;
        }
        startRow++;
        
        for (let i = startRow; i <= endCol; i++) {
            answer[i][endCol] = count;
            count++;
        }
        endCol--;
        
        for (let i = endCol; i >= startCol; i--) {
            answer[endRow][i] = count;
            count++;
        }
        endRow--;
        
        for (let i = endRow; i >= startRow; i--) {
            answer[i][startCol] = count;
            count++;
        }
        startCol++;
    }
    
    return answer;
}