// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function stringNumberSum(num_str: string) {
    return [...num_str].reduce((acc, value) => {
        return acc + Number(value);
    }, 0);
}