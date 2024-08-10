// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function chickenCoupon(chicken: number) {
    let ch = chicken;
    let coupon = chicken;
    let count = 0;
    while (true) {
        if (coupon < 10) {
            break;
        }
        ch = Math.trunc(coupon / 10);
        coupon = ch + (coupon % 10);
        count += ch;
    }
    
    return count;
}