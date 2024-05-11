// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function examOfSelection(rank: number[], attendance: boolean[]) {
    const [a, b, c] = rank.map((r, i) => [r, i])
    .filter(([r, i]) => attendance[i])
    .sort(([a], [b]) => a - b).slice(0, 3);
    
    return (10000 * a[1]) + (100 * b[1]) + c[1];
}