// https://school.programmers.co.kr/learn/challenges/training?order=recent&statuses=solved

function threeSplitChar(myStr: string) {
    const answer = myStr.split(/a|b|c/g).filter((v) => v);
    return answer.length === 0 ? ["EMPTY"] : answer;
}