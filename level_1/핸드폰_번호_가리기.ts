// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function hidePhoneNumber(phone_number: string): string {
    const reverse = [...phone_number].reverse();
    let answer = '';
    reverse.forEach((v, i) => {
        if (i > 3) {
            answer = '*' + answer;
        } else {
            answer = v + answer;
        }
    });
    return answer;
}