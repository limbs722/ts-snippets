// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function removeChar(my_string: string, indices: number[]) {
    return [...my_string].filter((_, idx) => !indices.includes(idx)).join('');
}