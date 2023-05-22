type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

export default function GlitchPhotoPuzzle({ onCompleted, onAbandoned }: Props)
{
    return (
        <div>
            <p>Photo Puzzle</p>
            <button onClick={() => onCompleted()}>Complete Puzzle</button>
            <button onClick={() => onAbandoned()}>Abandon Puzzle</button>
        </div>
    )
}