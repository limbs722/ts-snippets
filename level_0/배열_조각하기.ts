// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function carveOutArray(arr: number[], query: number[]) {
    let result = arr;
    query.map((v, i) => {
        if (i % 2 === 0) {
            result = result.slice(0, v + 1);
        } else {
            result = result.slice(v);
        }
    })
    
    return result;
}