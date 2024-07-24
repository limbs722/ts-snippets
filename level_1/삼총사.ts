// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function trio(number: number[]) {
    const len = number.length;
    let answer = 0;
    
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = number[i] + number[j] + number[k];
                if (sum === 0) {
                    console.log(number[i], number[j], number[k]);
                    answer++;
                }
            }
        }
    }
    
    return answer;
}