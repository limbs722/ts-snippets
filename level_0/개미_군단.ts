// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function antArmy(hp: number) {
    return Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + (hp % 5) % 3;
}