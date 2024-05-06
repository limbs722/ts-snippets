// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function splitNSort(myString: string) {
    return myString.split('x').filter((v) => v).sort();
}