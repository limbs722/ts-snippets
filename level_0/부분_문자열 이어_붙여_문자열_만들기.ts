// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function makeString(my_strings: string[], parts: number[][]) {
    return my_strings.map((item, idx) => {
        const [s, e] = parts[idx];
        return item.slice(s, e + 1);
    }).join('');
}