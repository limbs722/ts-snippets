// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function antArmy(hp: number) {
    const hpType = {
        general: 5,
        soldier: 3,
        worker: 1
    }

    let remainHp = hp;
    let totalAnt = 0;

    while (remainHp > 0) {
        if (remainHp >= hpType.general) {
            remainHp -= hpType.general;
            totalAnt++;
        } else if (remainHp >= hpType.soldier) {
            remainHp -= hpType.soldier;
            totalAnt++;
        } else {
            remainHp -= hpType.worker;
            totalAnt++;
        }
    }

    return totalAnt;
}