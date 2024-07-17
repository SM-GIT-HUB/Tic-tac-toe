function isWinner(board, symbol, winner)
{
    if (winner == "X" || winner == "O") {
        return "-";
    }

    for (let i = 0; i < 7; i += 3)
    {
        if (board[i] == board[i + 1] && board[i + 1] == board[i + 2] && board[i + 2] == symbol) {
            return symbol;
        }
    }

    for (let i = 0; i < 3; i++)
    {
        if (board[i] == board[i + 3] && board[i + 3] == board[i + 6] && board[i + 6] == symbol) {
            return symbol;
        }
    }

    if (board[0] == board[4] && board[4] == board[8] && board[8] == symbol) {
        return symbol;
    }
    if (board[2] == board[4] && board[4] == board[6] && board[6] == symbol) {
        return symbol;
    }

    return "-";
}

export default isWinner