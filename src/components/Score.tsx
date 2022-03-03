import * as React from 'react';
import { ChakraProvider, Flex, theme, Text } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Score = ({playerScore}: {playerScore: number[]}) => {

    return (
        <ChakraProvider theme={theme}>
            <Flex paddingTop="40px">
                <Text fontSize="4xl" color="#C08DE9">{playerScore[0]}</Text>
                <Text fontSize="4xl" color ="#626887" px="10px">-</Text>
                <Text fontSize="4xl" color="#517AE4">{playerScore[1]}</Text>
            </Flex>
        </ChakraProvider>
    )
};

export default Score;