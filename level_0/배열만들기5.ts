// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function makeArray5(intStrs: string[], k: number, s: number, l: number) {
    return intStrs.reduce((acc: number[], value) => {
        const compareNum: number = Number(value.slice(s, s + l));
        if (compareNum > k) {
            acc.push(compareNum)
        }
        return acc;
    }, []);
}