'use client'
import CountUp from "react-countup"

interface PropTypes {
    amount: number
}

export default function AnimatedCounter({ amount }: PropTypes) {
    return (
        <div className="w-full">
            <CountUp 
                end={amount}
                decimal=","
                prefix="$"
                decimals={2}
            />
        </div>
    )
}
