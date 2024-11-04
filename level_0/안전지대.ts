// https://school.programmers.co.kr/learn/courses/30/lessons/120866

// 지뢰가 있는 위치 [col, row]
// 지뢰 주변 위치
// [-1, -1][-1, 0][-1, 1][0, -1][0, 0][0, 1][1, -1][1, 0][1, 1]

function* enumerateGrid<T>(
    grid: T[][]
): Generator<readonly [[number, number], T]> {
    // entries()는 [index, value]를 반환
    for (const [idx_r, xs] of grid.entries()) {
        for (const [idx_x, x] of xs.entries()) {
            yield [[idx_r, idx_x], x];
        }
    }
}

function safeZone(board: number[][]) {
    let count = 0;
    let len = board.length;
    const zones = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 0],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    function* findMine() {
        for (const [[row, col], x] of enumerateGrid(board)) {
            if (x === 1) {
                count++; // 지뢰 영역 카운트;
                yield* checkMineZone([row, col]);
            }
        }
    }

    function* checkMineZone(minePos: [number, number]) {
        for (const zone of zones) {
            let [r, c] = zone;
            let [row, col] = minePos;
            [row, col] = [row + r, col + c];
            if (
                col >= 0 &&
                col < len &&
                row >= 0 &&
                row < len &&
                board[col][row] === 0
            ) {
                yield [col, row];
            }
        }
    }

    const mines = findMine();

    for (const mine of mines) {
        const [x, y] = mine;
        board[x][y] = 2;
        count++;
    }

    return Math.pow(len, 2) - count;
}

const test = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]];
console.log(safeZone(test));