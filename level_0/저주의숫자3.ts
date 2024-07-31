// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function numberOfCurses(n: number) {
    // 3의 배수, '3'이 들어간 숫자
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        count++;
        while (count % 3 === 0 || count.toString().includes('3')) {
            count++;
        }
    }
    
    return count;
}