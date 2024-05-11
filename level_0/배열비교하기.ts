// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function compareArray(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } 

    const arr1Sum = arr1.reduce((acc, value) => { return acc + value }, 0);
    const arr2Sum = arr2.reduce((acc, value) => { return acc + value }, 0);
    
    return arr1Sum === arr2Sum ? 0 : arr1Sum > arr2Sum ? 1 : -1;
}