// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function queries4(arr: number[], queries: number[][]) {
    let answer = arr;
    queries.forEach((v) => {
        const [ s, e, k ] = v;
        for(let i = s; i <= e; i++) {
            if (i % k === 0) {
                answer[i] += 1;
            }
        }
    })
    
    return answer;
}