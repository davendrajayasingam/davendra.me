type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function GlitchSudokuPuzzle({ onCompleted, onAbandoned }: Props)
{
    return (
        <div>
            <p>Sudoku Puzzle</p>
            <button onClick={() => onCompleted()}>Complete Puzzle</button>
            <button onClick={() => onAbandoned()}>Abandon Puzzle</button>
        </div>
    )
}