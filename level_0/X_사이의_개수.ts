// https://school.programmers.co.kr/learn/courses/30/lessons/181867

function betweenX(myString: string) {
    return myString.split('x').map((v) => v.length);
}