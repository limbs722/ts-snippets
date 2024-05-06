// https://school.programmers.co.kr/learn/courses/30/lessons/181870

function removeAD(strArr: string[]) {
    return strArr.filter((v) => !v.includes('ad'));
}