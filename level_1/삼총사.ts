// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function trio(number: number[], n: number): number {
    function find(numbers: number[], combination: number[]): number {
        // combination: 현재까지의 조합
        // numbers: 현재까지의 숫자
        if (combination.length === n) {
            return combination.reduce((sum, num) => sum + num, 0) === 0 ? 1 : 0;
        }

        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            // i번째 숫자를 제외한 나머지 숫자들로 조합하기
            count += find(numbers.slice(i + 1), [...combination, numbers[i]]);
        }
        return count;
    }

    return find(number, []);
}

console.log(trio([-3, -2, -1, 0, 1, 2, 3], 3));