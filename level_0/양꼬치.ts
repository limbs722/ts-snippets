// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function lamb(n: number, k: number) {
    let discount = 0;
    const price = (n * 12000) + (k * 2000);
    
    discount = Math.trunc(n / 10) > k ? k * 20000 : Math.trunc(n / 10) * 2000;
    
    return price - discount;
}