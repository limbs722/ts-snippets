// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function selectCharToUpper(my_string: string, alp: string) {
    return [...my_string].map((c) => c === alp ? c.toUpperCase() : c).join('');
}