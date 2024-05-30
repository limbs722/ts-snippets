// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function getMode(array: number[]) {
    const countObj = array.reduce((acc, value) => {
        acc[value] = (acc[value] ?? 0) + 1;
        return acc;
    }, {});
    
    const max = Math.max(...Object.values(countObj));
    
    if (Object.values(countObj).filter((v) => v === max).length > 1) {
        return -1;
    }
    
    return Number(Object.keys(countObj).find(key => countObj[key] === max));
}