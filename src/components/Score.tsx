import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, theme, Text } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Score = ({playerScore}: {playerScore: number[]}) => {


    const [curPlayerScore, setCurPlayerScore] = useState(playerScore);

    useEffect(() => {
        setCurPlayerScore(playerScore);
    }, [playerScore]);

    return (
        <ChakraProvider theme={theme}>
            <Flex paddingTop="40px">
                <Text fontSize="4xl" color="#C08DE9">{curPlayerScore[0]}</Text>
                <Text fontSize="4xl" color ="#626887" px="10px">-</Text>
                <Text fontSize="4xl" color="#517AE4">{curPlayerScore[1]}</Text>
            </Flex>
        </ChakraProvider>
    )
};

export default Score;