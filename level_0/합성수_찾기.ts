// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function checkDivisor(num: number) {
    let cnt = 0;
    let idx = 1;
    while (idx <= num) {
        if (num % idx === 0) {
            cnt++;
        }

        if (idx === num) {
            break;
        } else {
            idx++;
        }
    }
    return cnt >= 3;
}

function findCompositNumber(n: number) {
    let compositCnt = 0;
    let index = 1;

    while (index <= n) {
        if (checkDivisor(index)) {
            compositCnt++;
        }

        if (index === n) {
            break;
        } else {
            index++;
        }
    }

    return compositCnt;
}
