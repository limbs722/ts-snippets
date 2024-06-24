// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function shareBalls(balls: number, share: number) {
    let result = 1;
    for (let i = 0; i < share; i++) {
        result *= (balls - i);
        result /= (i + 1);
    }

    return result;
}