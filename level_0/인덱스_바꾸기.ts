// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function changeIndex(my_string: string, num1: number, num2: number) {
    const str = my_string.split('');
    [str[num1], str[num2]] = [str[num2], str[num1]];
    
    return str.join('');
}