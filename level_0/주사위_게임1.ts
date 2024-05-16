// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function diesGame1(a: number, b: number) {
    const isOdd_A = a % 2 !== 0;
    const isOdd_B = b % 2 !== 0;
    
    if ((a + b) % 2 !== 0) {
        return 2 * (a + b);
    }
    
    if (isOdd_A && isOdd_B) {
        return (a ** 2) + (b ** 2);
    } else {
        return Math.abs(a - b);
    }
}