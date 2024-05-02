// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function makeOne(num_list: number[]) {
    return num_list.reduce((acc, value) => {
        let count = 0;
        let one = value;
        
        while (one !== 1) {
            if (one % 2 === 0) {
                one /= 2;
            } else {
                one = (one - 1) / 2;
            }
            count++;
        }
        
        return acc + count;
    }, 0);
}