// https://school.programmers.co.kr/learn/courses/30/lessons/120878
    
function judgeFinitePrimeNumber(a: number, b: number) {
    // 최대 공약수 구하기
    function calc_gcd(x: number, y: number): number {
        return x % y === 0 ? y : calc_gcd(y, x % y)
    }
        
    // 소인수분해 하기
    function primeFactors(n: number) {
        let result = [];
        let divisor = 2;
        
        while (n >= 2) {
            if (n % divisor === 0) {
                result.push(divisor)
                n = n / divisor;
            }
            else divisor++;
        }    
        return [...new Set(result)];
    }

    const gcd = calc_gcd(a, b);
    a = a / gcd;
    b = b / gcd;

    const primes = primeFactors(b);
    return primes.find(n => n !== 2 && n !== 5) ? 2 : 1
}