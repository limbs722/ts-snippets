// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function additionOfFractions(numer1: number, denom1: number, numer2: number, denom2: number) {  
    const calcGcd = (a: number, b: number): number => {
        return a % b === 0 ? b : calcGcd(b, a % b);
    }
    
    const numer = (denom1 * numer2) + (denom2 * numer1);
    const denom = denom1 * denom2;
    const gcd = calcGcd(numer, denom);
    
    return [ (numer / gcd), (denom / gcd) ];
}