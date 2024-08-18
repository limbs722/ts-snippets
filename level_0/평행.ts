// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function parallel(dots: [number, number][]) {
    // 두 점 (x1, y1)과 (x2, y2) 사이의 기울기를 계산
    function slope(dot1: [number, number], dot2: [number, number]) {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        return (y2 - y1) / (x2 - x1);
    }
    
    // dots의 인덱스 조합
    const pairs = [
        [[0, 1], [2, 3]],
        [[0, 2], [1, 3]],
        [[0, 3], [1, 2]],
    ]
    
    // 각 조합에 대해 기울기를 비교하여 평행한지 확인
    for (let [[i, j], [k, l]] of pairs) {
        if (slope(dots[i], dots[j]) === slope(dots[k], dots[l])) {
            return 1;
        }
    }
        
    return 0;
}