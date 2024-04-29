// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function reverseString(my_string: string, s: number, e: number) {
    return my_string.slice(0, s) + [...my_string].slice(s, e + 1).reverse().join('') + my_string.slice(e + 1);
}