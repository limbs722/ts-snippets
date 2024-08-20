// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function trio(number: number[], n: number): number {
    function find(start: number, combination: number[]): number {
        // combination: 현재까지의 조합
        if (combination.length === n) {
            return combination.reduce((sum, num) => sum + num, 0) === 0 ? 1 : 0;
        }

        let count = 0;
        for (let i = start; i < number.length; i++) {
            count += find(i + 1, [...combination, number[i]]);
        }
        return count;
    }

    return find(0, []);
}

console.log(trio([-3, -2, -1, 0, 1, 2, 3], 3));