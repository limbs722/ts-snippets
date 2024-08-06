// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function uniqueSort(numlist: number[], n: number) {
    return numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
}