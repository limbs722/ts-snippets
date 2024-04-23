// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function countUp(start_num: number, end_num: number) {
    // lodash method 중 'range' 사용 가능
    // import _ from lodash
    // _.range(start_num, end_num + 1)
    return Array.from({ length: (end_num - start_num) + 1 }, (_, i) => start_num + i)
}