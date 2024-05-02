// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function sequenceChange1(arr: number[]) {
    return arr.map((value) => {
        if (value >= 50 && value % 2 === 0) {
            value /= 2;
        } else if (value < 50 && value % 2 !== 0) {
            value *= 2;
        }
        
        return value;
    });
}