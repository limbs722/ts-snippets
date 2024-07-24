// https://school.programmers.co.kr/learn/courses/30/lessons/120866

    // 지뢰가 있는 위치 [col, row]
    // 지뢰 주변 위치
    // [-1, -1][-1, 0][-1, 1][0, -1][0, 0][0, 1][1, -1][1, 0][1, 1]

    function safeZone(board: number[][]) {
        let answer = 0;
        let len = board.length;
        const zone = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 0],[0, 1],[1, -1],[1, 0],[1, 1]];

        board.forEach((col, i) => {
            col.forEach((row, j) => {
                if (row === 1) {
                    zone.forEach(([c, r]) => {
                        let [x, y] = [c, r];
                        [x, y] = [x + i, y + j];
                        if (x >= 0 && x < len
                            && y >= 0 && y < len
                            && board[x][y] === 0) {
                                board[x][y] = 2;
                            }
                    })
                }
            })
        })
        
        board.forEach((v1) => {
            v1.forEach((v2) => {
                v2 === 0 ? answer++ : 0;
            })
        })
        
        return answer;
    }