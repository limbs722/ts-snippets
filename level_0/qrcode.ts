// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function qrcode(q: number, r: number, code: string) {
    return [...code].map((item, idx) => {
        if (idx % q === r) {
            return item;
        }
    }).join('');
}