// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function emyptyArrAddRemove(arr: number[], flag: boolean[]) {
    return arr.reduce((acc: number[], value, idx) => {
        if (flag[idx]) {
            for (let i = 0; i < (value * 2); i++) {
                acc.push(value);
            }
        } else {
            for (let i = 0; i < value; i++) {
                acc.pop();
            }
        }
        
        return acc;
    }, []);
}