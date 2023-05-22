type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function GlitchMemoryPuzzle({ onCompleted, onAbandoned }: Props)
{
    return (
        <div>
            <p>Memory Puzzle</p>
            <button onClick={() => onCompleted()}>Complete Puzzle</button>
            <button onClick={() => onAbandoned()}>Abandon Puzzle</button>
        </div>
    )
}