// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function discountClothes(price: number) {
    if (price >= 500000 && price <= 1000000) {
        return Math.floor(price - (price * 0.2));
    } else if (price >= 300000 && price < 500000) {
        return Math.floor(price - (price * 0.1));
    } else if (price >= 100000 && price < 300000) {
        return Math.floor(price - (price * 0.05));
    } else {
        return price;
    }
}