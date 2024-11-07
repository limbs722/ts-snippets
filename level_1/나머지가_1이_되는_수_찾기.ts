// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function remainOne(n: number): number {
    let x = 1;
    
    while(true) {
        if (n % x === 1) {
            break;
        }
        x++;
    }
    
    return x;
}