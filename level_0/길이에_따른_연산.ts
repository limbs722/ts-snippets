// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function lengthCondition(num_list: number[]) {
    const isSum = num_list.length > 10;
    return num_list.reduce((acc, value) => {
        return isSum ? acc + value : acc * value;
    }, isSum ? 0 : 1);
}