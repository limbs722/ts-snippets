// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function diagonalLoop(board: number[][], k: number) {
    let result = 0;
    
    board.forEach((value, i) => {
        value.forEach((_, j) => {
            if (i + j <= k) {
                result += board[i][j];
            }
        })
    })
    
    return result;
}