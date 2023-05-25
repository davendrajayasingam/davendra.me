/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'

import { ImSpinner3 } from 'react-icons/im'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import { classNames } from '@/utils/helperFunctions'
import puzzleImg from '@/public/images/glitch/picture-puzzle/ravana.png'

type Props = {
    onCompleted: () => void
    onAbandoned: () => void
}

type TileData = {
    id: number
    ref: React.RefObject<HTMLImageElement>
    base64Img: string
}

export default function GlitchPicturePuzzle({ onCompleted, onAbandoned }: Props)
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
    const containerRef = useRef<HTMLDivElement>(null)

    const posRef = useRef<{
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

    const setupGSAP = () =>
    {
        gsap.registerPlugin(Draggable)

        Draggable.create('.tile', {
            bounds: boundaryRef.current,
            onPressInit: (e) =>
            {
                posRef.current = {
                    xPos: e.x,
                    yPos: e.y,
                    initialXPos: gsap.getProperty(e.target, 'x') as number,
                    initialYPos: gsap.getProperty(e.target, 'y') as number,
                    target: e.target
                }
            },
            onDragEnd: (e) =>
            {
                const airTile = e.target.alt?.startsWith('Tile-') ? e.target : null
                if (!airTile) 
                {
                    gsap.to(posRef.current.target, {
                        x: posRef.current.initialXPos,
                        y: posRef.current.initialYPos
                    })
                    return
                }
                const size = (Math.floor(boundaryRef.current!.clientWidth / 3) * 3) / 3

                let hitSomething = false

                for (let i = 0, len = tiles.length; i < len; i++)
                {
                    const groundTile = tiles[i].ref.current
                    if (Draggable.hitTest(airTile, groundTile, '51%'))
                    {
                        const xUnits = Math.round((e.x - posRef.current.xPos) / size) * size
                        const yUnits = Math.round((e.y - posRef.current.yPos) / size) * size

                        const prop = gsap.getProperty(groundTile)
                        gsap.to(airTile, {
                            x: posRef.current.initialXPos + xUnits,
                            y: posRef.current.initialYPos + yUnits
                        })
                        gsap.to(groundTile, {
                            x: prop('x') as number - xUnits,
                            y: prop('y') as number - yUnits,
                            onComplete: () => checkForWin()
                        })

                        hitSomething = true
                        break
                    }
                }

                if (!hitSomething)
                {
                    gsap.to(airTile, {
                        x: posRef.current.initialXPos,
                        y: posRef.current.initialYPos
                    })
                }
            }
        })
    }

    const getBase64StringFromDataURL = (dataURL: string) => dataURL.replace('data:', '').replace(/^.+,/, '')

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

    const splitImageIntoTiles = (base64Image: string) =>
    {
        const drawImagesHelper = (image: HTMLImageElement) =>
        {
            const singleTileSize = puzzleImg.width / 3

            const newSetOfTiles: TileData[] = [...defaultTiles]

            // Iterate through each tile
            for (let row = 0; row < 3; row++)
            {
                for (let col = 0; col < 3; col++)
                {
                    // Create a canvas element for each tile
                    const canvas = document.createElement('canvas')
                    canvas.width = singleTileSize
                    canvas.height = singleTileSize

                    // Draw the corresponding portion of the image onto the canvas
                    const ctx = canvas.getContext('2d')
                    ctx!.drawImage(
                        image,
                        col * singleTileSize,
                        row * singleTileSize,
                        singleTileSize,
                        singleTileSize,
                        0,
                        0,
                        singleTileSize,
                        singleTileSize
                    )

                    // Add the base64 representation of the tile to our array
                    const base64 = getBase64StringFromDataURL(canvas.toDataURL('image/png'))
                    const number = row * 3 + col + 1
                    newSetOfTiles.find(tile => tile.id === number)!.base64Img = base64
                }
            }

            setTiles(newSetOfTiles)

            shuffleTiles(newSetOfTiles)
        }

        // load the image
        const image = document.createElement('img')
        image.src = `data:image/png;base64,${base64Image}`
        image.onload = () => drawImagesHelper(image)
    }

    const loadImage = (): Promise<string> => 
    {
        return new Promise((resolve, reject) =>
        {
            try
            {
                fetch(puzzleImg.src)
                    .then((res) => res.blob())
                    .then((blob) => 
                    {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(getBase64StringFromDataURL(reader.result as string))
                        reader.readAsDataURL(blob)
                    })
            }
            catch (error)
            {
                console.error(error)
                reject('')
            }
        })
    }

    const [isGameOver, setIsGameOver] = useState(false)

    const setupGame = () =>
    {
        setIsGameOver(false)
        loadImage().then(base64 => splitImageIntoTiles(base64))
    }

    useEffect(() =>
    {
        setupGSAP()
        setupGame()
    }, [])

    function checkForWin()
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
            setIsGameOver(true)
        }
    }

    const imagesLoaded = tiles.every(tile => tile.base64Img)

    return (
        <div className='flex flex-col items-center justify-center space-y-8 min-h-screen py-8 max-w-screen-lg mx-auto'>

            <div className='mx-4 p-4 flex flex-col space-y-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md'>
                <h1 className='text-center font-medium text-4xl text-glitch-yellow'>
                    BLAH BLAH
                </h1>

                <p className='pt-4 text-lg text-justify text-theme-editor.foreground'>
                    <b className='text-glitch-yellow'>RAMA</b>, a Robust Anti-Malware Agent, utilizes its advanced capabilities to detect, neutralize, and eradicate malicious software threats.
                </p>
            </div>

            {!imagesLoaded && <ImSpinner3 className='w-8 h-8 text-white animate-spin' />}

            <div className='p-4 w-full max-w-screen-sm pointer-events-none' ref={containerRef}>
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
                        width: Math.floor(((containerRef.current?.clientWidth || 0) - 32) / 3) * 3
                    }}
                >
                    {
                        tiles.map(tile => (
                            <img
                                key={`tile-${tile.id}`}
                                ref={tile.ref}
                                src={`data:image/png;base64,${tile.base64Img}`}
                                alt={`Tile-${tile.id}`}
                                className='tile w-full h-full aspect-square pointer-events-auto'
                            />
                        ))
                    }
                </div>
            </div>

            <div className='text-center'>
                {
                    isGameOver
                        ? <>
                            <p className='font-bold text-theme-red text-xl'>You did it!</p>
                        </>
                        : <>
                            <div>
                                <button className='font-base underline hover:text-theme-red' onClick={() => setupGame()}>Having touble? Click here to reset.</button>
                            </div>
                            <div className='mt-4'>
                                Back to main page
                            </div>
                        </>
                }
            </div>

        </div>
    )
}