// Guide: https://github.com/ulitcos/react-canvas-confetti

import { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { CreateTypes, Options } from 'canvas-confetti'

function randomInRange(min: number, max: number) 
{
    return Math.random() * (max - min) + min
}

function getAnimationSettings(angle: number, originX: number): Options
{
    return {
        particleCount: 1,
        startVelocity: 0,
        ticks: 200,
        gravity: 0.3,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.999 - 0.2
        },
        colors: ['#ffd319'],
        shapes: ['circle'],
        scalar: randomInRange(0.4, 1)
    }
}

export default function Confetti() 
{
    const refAnimationInstance = useRef<CreateTypes | null>(null)
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>()

    const getInstance = useCallback((instance: CreateTypes | null) =>
    {
        refAnimationInstance.current = instance
    }, [])

    const nextTickAnimation = useCallback(() => 
    {
        if (refAnimationInstance.current) 
        {
            refAnimationInstance.current(getAnimationSettings(60, 0))
            refAnimationInstance.current(getAnimationSettings(120, 1))
        }
    }, [])

    const startAnimation = useCallback(() => 
    {
        if (!intervalId) 
        {
            setIntervalId(setInterval(nextTickAnimation, 16))
        }
    }, [nextTickAnimation, intervalId])

    // const pauseAnimation = useCallback(() => 
    // {
    //     clearInterval(intervalId as number)
    //     setIntervalId(null)
    // }, [intervalId])

    // const stopAnimation = useCallback(() => 
    // {
    //     clearInterval(intervalId as number)
    //     setIntervalId(null)
    //     refAnimationInstance.current && refAnimationInstance.current.reset()
    // }, [intervalId])

    useEffect(() => 
    {
        return () => 
        {
            clearInterval(intervalId as NodeJS.Timer)
        }
    }, [intervalId])

    useEffect(() =>
    {
        startAnimation()
    }, [])

    return (
        <ReactCanvasConfetti
            refConfetti={getInstance}
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
            }}
        />
    )
}