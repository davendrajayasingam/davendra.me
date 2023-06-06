/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { HiCursorClick } from 'react-icons/hi'

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
        <div className='w-full max-w-screen-sm mx-auto bg-black bg-opacity-50'>
            <div className='grid grid-cols-4 w-full border-4 border-secret-orange shadow shadow-secret-yellow'>
                {
                    grid.map((item, index) => (
                        <button
                            key={`grid-item-${index}`}
                            type='button'
                            onClick={() => handleClick(item, index)}
                            disabled={defaultGrid[index] !== 0}
                            className='border-4 border-secret-orange disabled:border-white aspect-square cursor-pointer outline-none focus:outline-none'
                        >
                            {
                                item === 0
                                    ? <HiCursorClick className='text-white text-2xl mx-auto animate-pulse' />
                                    : <img
                                        src={base64Images[item]}
                                        className='w-full h-full object-contain pointer-events-none'
                                    />
                            }
                        </button>
                    ))
                }
            </div>
        </div>
    )
}