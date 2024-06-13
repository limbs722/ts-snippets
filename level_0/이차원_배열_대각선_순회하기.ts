// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function diagonalLoop(board: number[][], k: number) {
    let result = 0;
    
    board.forEach((row, i) => {
        row.forEach((ele, j) => {
            if (i + j <= k) {
                result += ele;
            }
        })
    })
    
    return result;
}