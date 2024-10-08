'use client'

import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import Starfield from './starfield';



export function Background({ children }: PropsWithChildren) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
            <Starfield
                starCount={2000}
                starColor={[22, 163, 74]}
                speedFactor={0.01}
                backgroundColor="black"
            />
            <div className="relative">
                {children}
            </div>
        </div>
    )
}