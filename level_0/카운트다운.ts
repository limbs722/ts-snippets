// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function countDown(start: number, end_num: number) {
    // lodash method 중 'rangeRight' 사용 가능
    // import _ from lodash
    // _.rangeRight(end_num, (start - end_num) + 1)
    // => 내림차순으로 배열에 담김.
    return Array.from({ length: (start - end_num) + 1 }, (_, i) => start - i);
}