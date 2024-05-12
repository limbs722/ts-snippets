// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function deleteElementOfArray(arr: number[], delete_list: number[]) {
    return arr.filter((v) => !delete_list.includes(v));
}