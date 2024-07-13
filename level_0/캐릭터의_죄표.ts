// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function movePosition(keyinput: string[], board: number[]) {
  const [x_len, y_len] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
  let pos = [0, 0];
  const move = {
      'left': ([posX, posY]: number[]) => (posX > -x_len ? [posX - 1, posY] : [posX, posY]),
      'right': ([posX, posY]: number[]) => (posX < x_len ? [posX + 1, posY] : [posX, posY]),
      'up': ([posX, posY]: number[]) => (posY < y_len ? [posX, posY + 1] : [posX, posY]),
      'down': ([posX, posY]: number[]) => (posY > -y_len ? [posX, posY - 1] : [posX, posY])
  };
  
  keyinput.forEach((key) => {
      pos = move[key](pos);
  });
  
  return pos;
}