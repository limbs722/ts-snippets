// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function sharePizza2(n: number) {
    function calcGcd(a: number, b: number): number {
        return a % b === 0 ? b : calcGcd(b, a % b);
    }

    return n / calcGcd(n, 6);
}