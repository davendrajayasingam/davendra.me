/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import { classNames } from '@/utils/helperFunctions'

type Props = {
    image: HTMLImageElement,
    onCompleted: () => void
}

type TileData = {
    id: number
    ref: React.RefObject<HTMLImageElement>
    base64Img: string
}

export default function PicturePuzzleGame({ image, onCompleted }: Props)
{
    const defaultTiles: TileData[] = [
        { id: 1, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 2, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 3, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 4, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 5, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 6, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 7, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 8, ref: useRef<HTMLImageElement>(null), base64Img: '' },
        { id: 9, ref: useRef<HTMLImageElement>(null), base64Img: '' }
    ]
    const [tiles, setTiles] = useState<TileData[]>(defaultTiles)

    // to help restrict how far you can drag the tiles
    const boundaryRef = useRef<HTMLDivElement>(null)

    // to know the size of the container
    // step 1: get the width of this container
    // step 2: find a value where it's divisible by 3
    // step 3: use this value to set the width of the boundary, so each tile is a whole number
    // why? when the tile width is a floating point, we can see micro gaps in the grid
    // also, floating points get messed up when applying transform - translate
    const containerRef = useRef<HTMLDivElement>(null)

    // x, y -> to know how many units to move this tile on drag release
    // initialX, initialY -> to know how many units to move the tile back to its original position, 
    //                       and to know how many units to move the tile being swapped
    // target -> to know which tile was dragged so that we can move it back to its original position
    //           if it didn't hit anything or it was dragged out of bounds. I realize we can use e.target
    //           but sometimes that value is different from the tile we dragged. Okay so get this, if you
    //           drag a tile, and if it overlaps another tile while dragging, very rarely, gsap will take
    //           that overlappted tile as the tile being dragged. We store the intial value to prevent that.
    const tileThatIsDraggedRef = useRef<{
        xPos: number,
        yPos: number,
        initialXPos: number,
        initialYPos: number,
        target: HTMLImageElement | null
    }>({
        xPos: 0,
        yPos: 0,
        initialXPos: 0,
        initialYPos: 0,
        target: null
    })

    // step 1
    const setupGSAP = () =>
    {
        gsap.registerPlugin(Draggable)

        Draggable.create('.picture-puzzle-tile', {
            bounds: boundaryRef.current,
            onPressInit: (e) =>
            {
                tileThatIsDraggedRef.current = {
                    xPos: e.x,
                    yPos: e.y,
                    initialXPos: gsap.getProperty(e.target, 'x') as number,
                    initialYPos: gsap.getProperty(e.target, 'y') as number,
                    target: e.target
                }
            },
            onDragEnd: (e) =>
            {
                // terminology:
                // airTile -> the tile that is being dragged
                // groundTile -> the tile that is being overlapped by the airTile

                const airTile = e.target.alt?.startsWith('Tile-') ? e.target : null

                // if null, it means the tile was dragged out of bounds
                if (!airTile) 
                {
                    gsap.to(tileThatIsDraggedRef.current.target, {
                        x: tileThatIsDraggedRef.current.initialXPos,
                        y: tileThatIsDraggedRef.current.initialYPos
                    })
                    return
                }

                const tileSize = boundaryRef.current!.clientWidth / 3

                // if it hit something, swap, else, move back to original position
                let hitSomething = false

                // go through each tile and check if the airTile overlaps it
                for (let i = 0, len = tiles.length; i < len; i++)
                {
                    const groundTile = tiles[i].ref.current
                    if (Draggable.hitTest(airTile, groundTile, '51%'))
                    {
                        // find the number of units to offset when moving the tiles
                        const xUnits = Math.round((e.x - tileThatIsDraggedRef.current.xPos) / tileSize) * tileSize
                        const yUnits = Math.round((e.y - tileThatIsDraggedRef.current.yPos) / tileSize) * tileSize

                        // swap the tiles
                        gsap.to(airTile, {
                            x: tileThatIsDraggedRef.current.initialXPos + xUnits,
                            y: tileThatIsDraggedRef.current.initialYPos + yUnits
                        })
                        gsap.to(groundTile, {
                            x: gsap.getProperty(groundTile)('x') as number - xUnits,
                            y: gsap.getProperty(groundTile)('y') as number - yUnits,
                            onComplete: () => checkForWin()
                        })

                        hitSomething = true
                        break
                    }
                }

                // if it didn't hit anything, move back to original position
                if (!hitSomething)
                {
                    gsap.to(airTile, {
                        x: tileThatIsDraggedRef.current.initialXPos,
                        y: tileThatIsDraggedRef.current.initialYPos
                    })
                }
            }
        })
    }

    // step 2
    const splitImageIntoTiles = () =>
    {
        // helper
        const getBase64StringFromDataURL = (dataURL: string) => dataURL.replace('data:', '').replace(/^.+,/, '')

        const tileSize = image.width / 3

        const newSetOfTiles: TileData[] = [...defaultTiles]

        for (let row = 0; row < 3; row++)
        {
            for (let col = 0; col < 3; col++)
            {
                // Create a canvas element for each tile
                const canvas = document.createElement('canvas')
                canvas.width = tileSize
                canvas.height = tileSize

                // Draw the corresponding portion of the image onto the canvas
                const ctx = canvas.getContext('2d')
                ctx!.drawImage(
                    image,
                    col * tileSize,
                    row * tileSize,
                    tileSize,
                    tileSize,
                    0,
                    0,
                    tileSize,
                    tileSize
                )

                // Add the base64 representation of the tile
                const base64 = getBase64StringFromDataURL(canvas.toDataURL('image/png'))
                const number = row * 3 + col + 1
                newSetOfTiles.find(tile => tile.id === number)!.base64Img = `data:image/png;base64,${base64}`
            }
        }

        setTiles(newSetOfTiles)

        return newSetOfTiles
    }

    // step 3
    const shuffleTiles = (newSetOfTiles: TileData[]) =>
    {
        const tileSize = (Math.floor(boundaryRef.current!.clientWidth / 3) * 3) / 3
        const shuffled = [...newSetOfTiles].sort(() => Math.random() - 0.5)

        for (let i = 0, len = newSetOfTiles.length; i < len; i++)
        {
            const tile = shuffled[i]
            const newPos = tile.id - 1
            const newXPos = (newPos % 3)
            const currXPos = (i % 3)
            const newYPos = Math.floor(newPos / 3) % 3
            const currYPos = Math.floor(i / 3) % 3
            gsap.to(newSetOfTiles[i].ref.current, {
                x: (newXPos - currXPos) * tileSize,
                y: (newYPos - currYPos) * tileSize
            })
        }
    }

    const checkForWin = () =>
    {
        let winner = true

        for (const tile of tiles)
        {
            const x = gsap.getProperty(tile.ref.current, 'x') as number
            const y = gsap.getProperty(tile.ref.current, 'y') as number
            if (Math.round(x) !== 0 || Math.round(y) !== 0)
            {
                winner = false
                break
            }
        }

        if (winner)
        {
            onCompleted()
        }
    }

    useEffect(() =>
    {
        // step 1
        setupGSAP()
        // steps 2 and 3
        shuffleTiles(splitImageIntoTiles())
    }, [])

    const imagesLoaded = tiles.every(tile => tile.base64Img)

    return (
        <div
            className='p-2 w-full max-w-screen-md pointer-events-none'
            ref={containerRef}
        >
            <div
                id='boundary'
                ref={boundaryRef}
                className={classNames(
                    'pointer-events-none',
                    'overflow-hidden mx-auto',
                    'grid grid-cols-3',
                    imagesLoaded ? 'opacity-100' : 'opacity-0',
                    'transition-all duration-300 ease-in-out'
                )}
                style={{
                    width: Math.floor(((containerRef.current?.clientWidth || 0) - 16) / 3) * 3
                }}
            >
                {
                    tiles.map(tile => (
                        <img
                            key={`tile-${tile.id}`}
                            ref={tile.ref}
                            src={tile.base64Img}
                            alt={`Tile-${tile.id}`}
                            className='picture-puzzle-tile w-full h-full aspect-square pointer-events-auto'
                        />
                    ))
                }
            </div>
        </div>
    )
}