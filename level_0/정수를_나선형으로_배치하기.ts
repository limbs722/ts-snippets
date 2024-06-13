// https://school.programmers.co.kr/learn/courses/30/lessons/181832

type Position = readonly [x: number, y: number];
type Direction = readonly [dx: number, dy: number];

function spiralPositioning(n: number) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));

    let count = 1;

    const fill = (startPosition: Position, direction: Direction): Position => {
        let [x, y] = startPosition;
        let [dx, dy] = direction;

        // 주어진 방향으로 값을 채워나감
        while (true) {
            let nextX = x + dx;
            let nextY = y + dy;

            // 배열의 범위를 벗어나지 않고 아직 채워지지 않은 칸인지 확인
            if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && answer[nextX][nextY] === 0) {
                answer[nextX][nextY] = count++;
                x = nextX;
                y = nextY;
            } else {
                break;
            }
        }

        return [x, y];
    };

    const directionss: Direction[] = [[0, 1], [1,0], [-1,0], [0,-1]];

    let position: Position = [0, 0];
    while (count <= n * n) {
        for(const direction of directionss) {
            position = fill(position, direction);

        }
    }

    return answer;
}