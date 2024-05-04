// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function highlightA(myString: string) {
    return [...myString].map((c) => ['a', 'A'].includes(c) ? 'A' : c.toLowerCase()).join('');
}