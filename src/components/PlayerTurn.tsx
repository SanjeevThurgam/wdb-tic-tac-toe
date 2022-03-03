import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const PlayerTurn = ({currentPlayer}: {currentPlayer: number}) => {

    const playerToDisplay = currentPlayer ?  'Player1' : 'Player2';

    return (
        <ChakraProvider theme={theme}>
            <Box>
                {playerToDisplay}
            </Box>
        </ChakraProvider>
    )
};

export default PlayerTurn;