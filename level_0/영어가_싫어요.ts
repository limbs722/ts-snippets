// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function hateEng(numbers: string) {
  const charToNum = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'zero': 0,
  };
  
  let answer = numbers;
  
  Object.keys(charToNum).forEach((v) => {
      const exp = new RegExp(`${v}`, "g");
      answer = answer.replace(exp, charToNum[v]);
  });
  
  return Number(answer);
}