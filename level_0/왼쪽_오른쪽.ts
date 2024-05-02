// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function leftRight(str_list: string[]) {
    for (const [idx, ele] of str_list.entries()) {
        if (ele === 'l') {
            return str_list.slice(0, idx)
        } else if (ele === 'r') {
            return str_list.slice(idx + 1);
        }
    }
    
    return [];
}