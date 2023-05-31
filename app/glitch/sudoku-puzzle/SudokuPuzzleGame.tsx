/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

type Props = {
    defaultGrid: number[],
    base64Images: string[],
    onCompleted: () => void
}

export default function SudokuPuzzleGame({ defaultGrid, base64Images, onCompleted }: Props)
{
    const [grid, setGrid] = useState(defaultGrid)

    const handleClick = (gridItem: number, gridIndex: number) =>
    {
        const newGrid = [...grid]
        let newItem = gridItem + 1
        if (newItem === base64Images.length)
        {
            newItem = 0
        }
        newGrid[gridIndex] = newItem
        setGrid(newGrid)
        checkForWin(newGrid)
    }

    const checkForWin = (newGrid: number[]) =>
    {
        let completedRowsAndColumns = 0
        const totalRowsAndColumns = Math.sqrt(newGrid.length)

        for (let i = 0; i < totalRowsAndColumns; i++)
        {
            const row = newGrid.slice(i * totalRowsAndColumns, (i + 1) * totalRowsAndColumns)
            const column = newGrid.filter((_, index) => (index % totalRowsAndColumns) === i)

            const rowHasDuplicates = row.some((item, index) => row.indexOf(item) !== index)
            const columnHasDuplicates = column.some((item, index) => column.indexOf(item) !== index)

            const rowHasEmptyLetters = row.some(item => item === 0)
            const columnHasEmptyLetters = column.some(item => item === 0)

            if (rowHasDuplicates || columnHasDuplicates || rowHasEmptyLetters || columnHasEmptyLetters)
            {
                break
            }

            completedRowsAndColumns += 1
        }

        const completedPuzzle = completedRowsAndColumns === totalRowsAndColumns
        if (completedPuzzle)
        {
            onCompleted()
        }
    }

    return (
        <div className='p-4 w-full max-w-screen-sm mx-auto'>
            <div className='grid grid-cols-4 w-full border-2 border-glitch-orange shadow shadow-glitch-yellow'>
                {
                    grid.map((item, index) => (
                        <button
                            key={`grid-item-${index}`}
                            type='button'
                            onClick={() => handleClick(item, index)}
                            disabled={defaultGrid[index] !== 0}
                            className='border border-glitch-purple disabled:border-glitch-red aspect-square cursor-pointer outline-none focus:outline-none'
                        >
                            <img
                                src={base64Images[item]}
                                className='w-full h-full object-contain pointer-events-none'
                            />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}