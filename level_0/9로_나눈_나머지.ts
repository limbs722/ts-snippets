// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function remainder(number: string) {
    return number.split('').reduce((acc, value) => {
        acc += Number(value);
        return acc;
    }, 0) % 9;
}