import * as React from 'react';
import { createIcon } from '@chakra-ui/react'


const CircleIcon = createIcon({
    displayName: 'X',
    viewBox: '0 0 120 120',
    path: (
        <>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.58092 3.58092C8.35548 -1.19364 16.0966 -1.19364 20.8711 3.58092L115.419 98.1289C120.194 102.903 120.194 110.645 115.419 115.419C110.645 120.194 102.903 120.194 98.1289 115.419L3.58092 20.8711C-1.19364 16.0966 -1.19364 8.35548 3.58092 3.58092Z" fill="#517AE4"/>,
            <path fillRule="evenodd" clipRule="evenodd" d="M115.419 3.58092C120.194 8.35548 120.194 16.0966 115.419 20.8711L20.8711 115.419C16.0966 120.194 8.3555 120.194 3.58094 115.419C-1.19363 110.645 -1.19363 102.903 3.58094 98.1289L98.1289 3.58092C102.903 -1.19364 110.645 -1.19364 115.419 3.58092Z" fill="#517AE4"/>
        </>
    )
})

export default CircleIcon;