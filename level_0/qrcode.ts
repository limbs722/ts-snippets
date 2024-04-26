// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function qrcode(q: number, r: number, code: string) {
    return [...code].filter((item, idx) => idx % q === r).join('');
}