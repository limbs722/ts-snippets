// https://school.programmers.co.kr/learn/courses/30/lessons/181886

function fiveSplit(names: string[]) {
    return names.filter((_, i) => i % 5 === 0);
}