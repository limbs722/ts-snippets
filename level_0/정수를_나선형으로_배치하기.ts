// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function spiralPositioning(n: number) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;

    let count = 1;

    const fillRow = (startCol: number, endCol: number, row: number, step: number) => {
        for (let col = startCol; step > 0 ? col <= endCol : col >= endCol; col += step) {
            answer[row][col] = count++;
        }
    };

    const fillCol = (startRow: number, endRow: number, col: number, step: number) => {
        for (let row = startRow; step > 0 ? row <= endRow : row >= endRow; row += step) {
            answer[row][col] = count++;
        }
    };

    while (count <= n * n) {
        fillRow(left, right, top, 1);  // 왼쪽 -> 오른쪽
        top++;
        fillCol(top, bottom, right, 1);  // 위 -> 아래
        right--;
        fillRow(right, left, bottom, -1);  // 오른쪽 -> 왼쪽
        bottom--;
        fillCol(bottom, top, left, -1);  // 아래 -> 위
        left++;
    }

    return answer;
}



/**
function solution(n) {
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

*/