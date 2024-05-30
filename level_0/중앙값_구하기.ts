// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function getMedian(array: number[]) {
    const median = Math.floor((array.length - 1) / 2);
    return array.sort((a, b) => a - b)[median];
}