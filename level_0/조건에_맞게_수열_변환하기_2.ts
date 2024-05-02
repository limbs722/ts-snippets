// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function sequenceChange2(arr: number[]) {
    let result = 0;
    let prevArr = arr;
    let currArr: number[] = [];

    while (true) {
        currArr = prevArr.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                v /= 2;
            } else if (v < 50 && v % 2 !== 0) {
                v = (v * 2) + 1;
            }
            return v;
        });

        if (prevArr.every((value, i) => value === currArr[i])) {
            break;
        } else {
            prevArr = currArr;
            result++;
        }
    }
    return result;
}