// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function cuttingList(n: number, slicer: number[], num_list: number[]) {
    const [a, b, c] = slicer;
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        default:    // case 4
            return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
    }
}