// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function stringTail(str_list: string[], ex: string) {
    return str_list.filter((value) => !value.includes(ex)).join('');
}