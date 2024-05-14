// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function coffeeOrder(order: string[]) {
    return order.reduce((acc, value) => acc + (value.includes('latte') ? 5000 : 4500), 0);
}