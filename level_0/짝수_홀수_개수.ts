// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function evenOddCount(num_list: number[]) {
    return [num_list.filter(v => v % 2 === 0).length, num_list.filter(v => v % 2 !== 0).length];
}