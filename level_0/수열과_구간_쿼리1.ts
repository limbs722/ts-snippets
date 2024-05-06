// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function queries1(arr: number[], queries: [number[], number[], number[]]) {
    let result = arr;
    
    queries.forEach(([s, e]) => {
        result = result.map((v, i) => {
            if (i >= s && i <= e) {
                v += 1;
            }
            return v;
        });
    });
    
    return result;
}