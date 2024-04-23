// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function makeArray2(l: number, r: number) {
    let answer: number[] = [];
    for(let i = l; i <= r; i++) {
        const strArr = i.toString().split('');
        const check = strArr.filter(v => v !== '0' && v !== '5');
        
        if (check.length === 0) {
            answer = [...answer, i];
        }
    }

    return answer.length === 0 ? [-1] : answer;
}