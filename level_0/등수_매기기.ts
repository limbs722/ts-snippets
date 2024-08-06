// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function ranking(score: [number, number][]) {
    const avgArr = score.map(([e, m]) => (e + m) / 2);
    const sortedArr = [...avgArr].sort((a, b) => b - a);
    
    return avgArr.map((v) => sortedArr.indexOf(v) + 1);
}