/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

type Props = {
    card: CardData,
    onClick: (card: CardData) => void,
}

type CardData = {
    id: number,
    isFlipped: boolean,
    isMatched: boolean,
    frontBase64Image: string,
    backBase64Image: string,
}

export default function MemoryPuzzleCard({ card, onClick }: Props)
{
    const cardRef = useRef<HTMLDivElement>(null)
    const cardFrontRef = useRef<HTMLImageElement>(null)
    const cardBackRef = useRef<HTMLImageElement>(null)

    const [flipTimeline, setFlipTimeline] = useState<GSAPTimeline>()
    const [cachedState, setCachedState] = useState<CardData>(card)

    useEffect(() => 
    {
        gsap.set(cardFrontRef.current, { rotationY: -180 })

        setFlipTimeline(gsap.timeline({ paused: true })
            .to(cardBackRef.current, { duration: .25, rotationY: 180 })
            .to(cardFrontRef.current, { duration: .5, rotationY: 0 }, 0)
            .to(cardRef.current, { z: 50 }, 0) // the zero is the delay time
            .to(cardRef.current, { z: 0 }, 0))
    }, [])

    useEffect(() =>
    {
        // we need this because of rapid clicked to the card
        // sometimes the open animation is not finished, 
        // so we need to wait for that to finish before we reverse
        const handleReverse = () =>
        {
            if (flipTimeline?.isActive())
            {
                const interval = setInterval(() =>
                {
                    if (flipTimeline?.isActive())
                    {
                        return
                    }
                    flipTimeline?.reverse()
                    clearInterval(interval)
                }, 100)
            }
            else
            {
                flipTimeline?.reverse()
            }
        }

        if (cachedState.isFlipped !== card.isFlipped)
        {
            card.isFlipped ? flipTimeline?.play() : handleReverse()
        }

        setCachedState({ ...card })
    }, [card])

    return (
        <button
            type='button'
            onClick={() => onClick(card)}
            disabled={card.isMatched}
            className='w-full h-full aspect-square focus:outline-none'
        >
            <div
                ref={cardRef}
                className='relative w-full h-full aspect-square'
            >
                <img
                    ref={cardBackRef}
                    src={card.backBase64Image}
                    alt='Card Back'
                    className='absolute inset-0 w-full h-full aspect-square object-contain rounded-md border-2 border-glitch-orange shadow shadow-glitch-yellow'
                    style={{
                        backfaceVisibility: 'hidden',
                        MozBackfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                />
                <img
                    ref={cardFrontRef}
                    src={card.frontBase64Image}
                    alt='Card Front'
                    className='absolute inset-0 w-full h-full aspect-square object-contain rounded-md border-2 border-glitch-orange shadow shadow-glitch-yellow'
                    style={{
                        backfaceVisibility: 'hidden',
                        MozBackfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                />
            </div>
        </button>
    )
}