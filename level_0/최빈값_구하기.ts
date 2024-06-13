// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function getMode(array: number[]) {
    let countMap = new Map();
    
    for (let num of array) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);
    }

    const values = [...countMap.values()];
    
    const max = Math.max(...values);
    
    if (values.filter((v) => v === max).length > 1) {
        return -1;
    }
    
    return [...countMap].sort(([a_num, a_cnt], [b_num, b_cnt]) => b_cnt - a_cnt)[0][1];
}