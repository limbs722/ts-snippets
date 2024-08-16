// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function exchangeCoupon(cp: number, exRate: number): { remainCoupons: number, addedChicken: number} {
    const addedChicken = Math.trunc(cp / exRate);
    const remainCoupons = cp % exRate;
    return { remainCoupons, addedChicken}
}

function chickenCoupon(chicken: number, exchangeRate: number) {
    let coupon = chicken;
    let count = 0;
    while (coupon >= exchangeRate) {
        const { remainCoupons, addedChicken } = exchangeCoupon(coupon, exchangeRate);
        count += addedChicken;
        coupon = addedChicken + remainCoupons;
    }
    
    return count;
}

// function chickenCoupon(chicken: number) {
//     let ch = chicken;
//     let coupon = chicken;
//     let count = 0;
//     while (true) {
//         if (coupon < 10) {
//             break;
//         }
//         ch = Math.trunc(coupon / 10);
//         coupon = ch + (coupon % 10);
//         count += ch;
//     }
    
//     return count;
// }