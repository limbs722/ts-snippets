// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function collatzConjecture(num: number): number {
    let count = 0;
    let coll = num;
    
    while (count < 500) {
        if (coll === 1) {
            break;
        }
        if (coll % 2 === 0) {
            coll = coll / 2;
        } else {
            coll = (coll * 3) + 1;
        }
        count++;
    }
    
    return count === 500 ? -1 : count;
}