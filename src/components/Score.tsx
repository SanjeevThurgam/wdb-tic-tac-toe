import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Score = ({playerScore}: {playerScore: number[]}) => {

    return (
        <ChakraProvider theme={theme}>
            <Box>
                {playerScore[0]} - {playerScore[1]}
            </Box>
        </ChakraProvider>
    )
};

export default Score;