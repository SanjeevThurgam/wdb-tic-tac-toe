import * as React from 'react';
import { ChakraProvider, Flex, theme, Text } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Score = ({player1Score, player2Score}: {player1Score: number, player2Score: number}) => {


    return (
        <ChakraProvider theme={theme}>
            <Flex paddingTop="40px">
                <Text fontSize="4xl" color="#C08DE9">{player2Score}</Text>
                <Text fontSize="4xl" color ="#626887" px="10px">-</Text>
                <Text fontSize="4xl" color="#517AE4">{player1Score}</Text>
            </Flex>
        </ChakraProvider>
    )
};

export default Score;