// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function remainder(number: string) {
    return number.split('').reduce((acc, value) => {
        return acc + Number(value);
    }, 0) % 9;
}