// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function isPrefix(my_string: string, is_prefix: string) {
    return my_string.slice(0, is_prefix.length).includes(is_prefix) ? 1 : 0;
}