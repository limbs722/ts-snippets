// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function sharePizza2(n: number) {
    function gcd(a: number, b: number): number {
        return a % b === 0 ? b : gcd(b, a % b);
    }

    return n / gcd(n, 6);
}