// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function makeString(my_string: string, index_list: number[]) {
    return index_list.reduce((acc, value) => {
        acc += my_string[value]
        return acc;
    }, '');
}