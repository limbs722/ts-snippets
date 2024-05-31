// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function iceamericano(money: number) {
    return [Math.floor(money / 5500), money % 5500];
}