// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function orderChange(num_list: number[], n: number) {
    return [...num_list.slice(n), ...num_list.slice(0, n)];
}