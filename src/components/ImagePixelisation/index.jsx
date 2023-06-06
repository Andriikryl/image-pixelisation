'use client'
import React, { useState } from 'react'
import NextImage from 'next/image'
import styles from './style.module.css'

export default function index({src, src10}) {
    const [dimansion, setDimension] = useState({width: 0, height: 0,})
  return (
    <div className={styles.imageContainer}>
        <NextImage 
            src={src10}
            width={0}
            height={0}
            priority={true}
            onLoadingComplete={(e) => {setDimension({width: e.width, height: e.height})}}
        />
        <canvas width={dimansion.width} height={dimansion.height} ></canvas>
    </div>
  )
}
