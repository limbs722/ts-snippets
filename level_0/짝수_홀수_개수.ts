// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function evenOddCount(num_list: number[]) {
    let evenCnt = 0;
    let oddCnt = 0;
    
    num_list.forEach((v) => {
        if (v % 2 === 0) {
            evenCnt++;
        } else {
            oddCnt++;
        }
    });
    
    return [evenCnt, oddCnt];
}