// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function verticalRead(my_string: string, m: number, c: number) {
    const splitStr = [];
    
    for (let i = 0; i < (my_string.length / m); i++) {
        splitStr.push([...my_string.slice(i * m, (i + 1) * m)]);
    }
    
    return splitStr.map((item) => item[c - 1]).join('');
}