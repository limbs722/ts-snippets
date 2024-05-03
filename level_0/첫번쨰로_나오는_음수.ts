// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function firstNegative(num_list: number[]) {
    return num_list.findIndex((v) => v < 0) ?? -1;
}