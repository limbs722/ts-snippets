// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function movePosition(keyinputs: string[], board: number[]) {
  const [x_len, y_len] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
  let pos: Position = [0, 0];

  const move = {
      left: ([posX, posY]) => [posX > -x_len ? posX - 1 : posX, posY],
      right: ([posX, posY]) => [posX < x_len ? posX + 1 : posX, posY],
      up: ([posX, posY]) => [posX, posY < y_len ? posY + 1 : posY],
      down: ([posX, posY]) => [posX, posY > -y_len ? posY - 1 : posY],
  } satisfies Record<string, (_: Position) => Position>;

  return keyinputs.reduce((acc, keyinput) => move[keyinput](acc), pos);
}