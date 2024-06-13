// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function avgOfArray(numbers: number[]) {
    return (numbers.reduce((acc, value) => acc + value, 0) / numbers.length).toFixed(1);
}