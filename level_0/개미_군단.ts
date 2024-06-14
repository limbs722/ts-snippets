// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function antArmy(hp: number) {
    const general = Math.floor(hp / 5);
    const soldier = Math.floor((hp - (general * 5)) / 3);
    const worker = hp - ((general * 5) + (soldier * 3));

    return general + soldier + worker;
}