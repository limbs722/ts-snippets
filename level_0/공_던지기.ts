// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function throwTheBall(numbers: number[], k: number) {
    let count = 1;
    let idx = 0;
    let throwNum;
    
    while (count <= k) {
        throwNum = numbers[idx];
        
        if (count === k) {
            break;
        }
        // 한 사람 건너 뛰고 다음 사람에게 토스 하므로 +2
        // idx는 공을 던지는 사람의 위치 => numbers[idx]
        idx = (idx + 2) % numbers.length;
        count++;
    }
    
    return throwNum;
}