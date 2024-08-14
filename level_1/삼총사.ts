// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function trio(number: number[], n: number) {
    let count = 0;
    let combination: number[] = [];

    function find(index: number, start: number) {
        if (index === n) {
            const sum = combination.reduce((acc, value) => acc + value, 0);
            if (sum === 0) {
                count++;
            }
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination[index] = number[i];
            find(index + 1, i + 1);
        }
    }

    find(0, 0);
    return count;

    // for (let i = 0; i < len - 2; i++) {
    //     for (let j = i + 1; j < len - 1; j++) {
    //         for (let k = j + 1; k < len; k++) {
    //             const sum = number[i] + number[j] + number[k];
    //             if (sum === 0) {
    //                 console.log(number[i], number[j], number[k]);
    //                 answer++;
    //             }
    //         }
    //     }
    // }
}