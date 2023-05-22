type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function GlitchMazePuzzle({ onCompleted, onAbandoned }: Props)
{
    return (
        <div>
            <p>Maze Puzzle</p>
            <button onClick={() => onCompleted()}>Complete Puzzle</button>
            <button onClick={() => onAbandoned()}>Abandon Puzzle</button>
        </div>
    )
}