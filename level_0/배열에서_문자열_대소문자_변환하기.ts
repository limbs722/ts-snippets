// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function strChangeInArr(strArr: string[]) {
    return strArr.map((item, idx) => {
        return idx % 2 === 0 ? item.toLowerCase() : item.toUpperCase()
    });
}