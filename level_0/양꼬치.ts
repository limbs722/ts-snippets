// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function lamb(n: number, k: number) {
    const event = Math.trunc(n / 10);
    const price = (n * 12000) + ((k - event) * 2000);

    return price
}