// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function protractor(angle: number) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}