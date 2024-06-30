// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function changeIndex(my_string: string, num1: number, num2: number) {
    const r1 = my_string.split('')[num1];
    const r2 = my_string.split('')[num2];
    
    return [...my_string].map((v, i) => {
        if (num1 === i) {
            return r2;
        } else if (num2 === i) {
            return r1;
        }
        return v;
    }).join('');
}