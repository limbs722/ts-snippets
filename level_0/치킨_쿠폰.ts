// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function divrem(x: number, y: number): [div: number, rem: number] {
    const div = Math.trunc(x / y);
    const rem = x % y;
    return [div, rem];
}

function chickenCoupon(chicken: number, exchangeRate: number) {
    let coupon = chicken;
    let count = 0;

    while (true) {
        const [addedChicken, remainCoupons] = divrem(coupon, exchangeRate);
        if (addedChicken === 0) {
            break;
        }
        count += addedChicken;
        coupon = addedChicken + remainCoupons;
    }

    return count;
}

console.log(chickenCoupon(100, 10)); // 11