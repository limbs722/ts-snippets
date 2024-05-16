// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function compareDate(date1: number[], date2: number[]) {
    return new Date(date1) < new Date(date2) ? 1 : 0;
}