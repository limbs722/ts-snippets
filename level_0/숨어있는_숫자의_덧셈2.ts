// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function hideNumberSum2(my_string: string) {
    const filterd = my_string.replace(/[a-zA-Z]/gi, ' ').split(' ');
    return filterd.reduce((acc, s) => {
        const toNum = Number(s);
        if (!Number.isNaN(toNum)) {
            return acc + toNum;
        }
    }, 0);
}