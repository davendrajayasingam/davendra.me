import { useState } from 'react'
import gsap from 'gsap'

import MemoryPuzzleCard from '@/app/secret/memory-puzzle/MemoryPuzzleCard'

type Props = {
    base64Images: string[],
    onCompleted: () => void
}

type CardData = {
    id: number,
    isFlipped: boolean,
    isMatched: boolean,
    frontBase64Image: string,
    backBase64Image: string,
}

export default function MemoryPuzzleGame({ base64Images, onCompleted }: Props)
{
    const [cards, setCards] = useState<CardData[]>(() =>
    {
        const newCards: CardData[] = []
        for (let i = 1; i < base64Images.length; i++)
        {
            const card: CardData = {
                id: i,
                isFlipped: false,
                isMatched: false,
                frontBase64Image: base64Images[i],
                backBase64Image: base64Images[0]
            }
            newCards.push(card)
        }
        const duplicated = [...newCards.map(a => ({ ...a })), ...newCards.map(a => ({ ...a }))]
        const shuffled = duplicated.sort(() => Math.random() - 0.5)
        return shuffled
    })

    const handleCardClicked = (card: CardData) =>
    {
        // if 2 cards are already open that have not been matched, do nothing
        const flippedCards = cards.filter(card => card.isFlipped && !card.isMatched)
        if (flippedCards.length === 2) 
        {
            return
        }

        // mark the card as flipped
        card.isFlipped = !card.isFlipped
        setCards([...cards.map(a => ({ ...a }))])

        gsap.delayedCall(.75, () => checkForMatch())
    }

    const checkForMatch = () => 
    {
        // check if any two cards are flipped, and if their src matches
        const flippedCards = cards.filter(card => card.isFlipped && !card.isMatched)
        if (flippedCards.length === 2)
        {
            const isMatched = flippedCards[0].id === flippedCards[1].id
            if (isMatched)
            {
                flippedCards[0].isMatched = true
                flippedCards[1].isMatched = true
            }
            else
            {
                flippedCards[0].isFlipped = false
                flippedCards[1].isFlipped = false
            }
            setCards([...cards.map(a => ({ ...a }))])

            checkForWin()
        }
    }

    const checkForWin = () =>
    {
        const matchedAll = cards.every(card => card.isMatched)
        if (matchedAll)
        {
            onCompleted()
        }
    }

    return (
        <div className='w-full max-w-screen-sm mx-auto'>
            <div className='grid grid-cols-4 gap-2 w-full'>
                {
                    cards.map((card, cardIdx) => (
                        <MemoryPuzzleCard
                            key={`card-${cardIdx}`}
                            card={card}
                            onClick={handleCardClicked}
                        />
                    ))
                }
            </div>
        </div>
    )
}