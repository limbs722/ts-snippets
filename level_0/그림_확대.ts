// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function pictureExpansion(picture: string[], k: number) {
    let answer: string[] = [];

    picture.forEach((str) => {
        const strExp = [...str].map((s) => s.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            answer.push(strExp);
        }
    });
    
    return answer;
}