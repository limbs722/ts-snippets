// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function addElement(arr: number[]) {
    return arr.reduce((acc: number[], value: number) => {
        for (let i = 0; i < value; i++) {
            acc.push(value);
        }
        
        return acc;
    }, []);
}