// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function movePosition(keyinput: string[], board: number[]) {
  const [x_len, y_len] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
  let pos = [0, 0];
  const move = {
      'left': ([posX, posY]: number[]) => ([posX > -x_len ? posX - 1 : posX, posY]),
      'right': ([posX, posY]: number[]) => ([posX < x_len ? posX + 1 : posX, posY]),
      'up': ([posX, posY]: number[]) => ([posX, posY < y_len ? posY + 1: posY]),
      'down': ([posX, posY]: number[]) => ([posX, posY > -y_len ? posY - 1 : posY])
  };
  
  const result = keyinput.reduce((acc, value) => {
    return move[value](acc)
  }, pos)
  
  return result;
}