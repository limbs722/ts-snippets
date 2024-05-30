// https://school.programmers.co.kr/learn/courses/30/lessons/120816

function sharePizza3(slice: number, n: number) {
    let result = 1;
    
    while (true) {
        if (Math.floor((slice * result) / n) > 0) {
            break;
        }
        result++;
    }
    
    return result;
}