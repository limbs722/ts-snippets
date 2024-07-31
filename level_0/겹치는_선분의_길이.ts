// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function overlappingLength(lines: [number, number][]) {
    const flatten = lines.flat();
    const start = Math.min(...flatten);
    const end = Math.max(...flatten);
    const list = [...Array(end-start)].fill(0);
    
    lines.forEach(([s, e]) => {
        for(let i = s; i < e; i++){
            list[i - start] += 1;
        }
    });
    
    return list.reduce((acc, value) => value > 1 ? acc + 1 : acc, 0);
}