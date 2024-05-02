// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function carveOutArray(arr: number[], query: number[]) {
    let result = arr;

    query.forEach((v, i) => {
        result = result.slice(...i % 2 === 0 ? [0, v + 1] : [v]);
    })
    
    return result;
}