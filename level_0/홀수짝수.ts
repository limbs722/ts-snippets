// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function oddEven(num_list: number[]) {
    let odd = 0;
    let even = 0;
    
    num_list.forEach((v, i) => {
        if ((i + 1) % 2 === 0) {
            even += v;
        } else {
            odd += v;
        }
    });
    
    return Math.max(odd, even);
}
