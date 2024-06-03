// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function discountClothes(price: number) {
    const discounts = [
        [500000, 0.2],
        [300000, 0.1],
        [100000,  0.05],
    ];

    for (const tier of discounts) {
        if (price >= tier[0]) {
            return Math.floor(price - (price * tier[1]));
        }
    }

    return price;
}