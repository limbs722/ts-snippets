// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function leftRight(str_list: string[]) {
    for (const [idx, ele] of str_list.entries()) {
        if (ele !== 'l' && ele !== 'r') {
            continue;
        }

        return str_list.slice(...ele === 'l' ? [0, idx] : [idx + 1]);
    }
    
    return [];
}