// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function antArmy(hp: number) {
    const antTypes = [
        { name: 'general', hp: 5 },
        { name: 'soldier', hp: 3 },
        { name: 'worker', hp: 1 }
    ];

    let remainHp = hp;
    let totalAnt = 0;

    for (const antType of antTypes) {
        while (remainHp >= antType.hp) {
            remainHp -= antType.hp;
            totalAnt++;
        }
    }

    return totalAnt;
}