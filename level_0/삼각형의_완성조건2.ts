// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function triangle2(sides: [number, number]) {
    const [min, max] = sides.sort((a, b) => a - b);
    const sum = min + max;
    
    // 가장 긴 변이 max 일 경우
    // max < min + x
    // max - min < x
    // 나머지 변의 길이가 max 일 경우
    // max + min > x
    // max - min < x < max + min
    
    return sum - (max - min) - 1;
}