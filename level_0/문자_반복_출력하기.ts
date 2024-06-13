// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function repeatStr(my_string: string, n: number) {
    return [...my_string].map(i => i.repeat(n)).join('');
}