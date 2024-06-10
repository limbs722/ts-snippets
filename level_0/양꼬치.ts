// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function lamb(n: number, k: number) {
    let discount = 0;
    const price = (n * 12000) + (k * 2000);
    
    if (Math.trunc(n / 10) > k) {
        discount = k * 2000;
    } else {
        discount = Math.trunc(n / 10) * 2000;
    }
    
    return price - discount;
}