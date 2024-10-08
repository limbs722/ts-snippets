// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function overlappingLength(lines: [number, number][]) {
    const flatArr = lines.flat();
    const start = Math.min(...flatArr);
    const end = Math.max(...flatArr);
    const list = [...Array(end - start)].fill(0);
    
    lines.forEach(([s, e]) => {
        for(let i = s; i < e; i++){
            list[i - start] += 1;
        }
    });
    
    return list.filter((value) => value > 1).length;
}