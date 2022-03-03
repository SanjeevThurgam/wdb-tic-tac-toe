import * as React from 'react';
import { ChakraProvider, Text, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const PlayerTurn = ({currentPlayer}: {currentPlayer: number}) => {

    const playerToDisplay = currentPlayer ?  'Player 1' : 'Player 2';
    const playerColor = currentPlayer ?  '#517AE4' : '#C08DE9';

    return (
        <ChakraProvider theme={theme}>
            <Text fontSize="4xl" color={playerColor}>
                {playerToDisplay}
            </Text>
        </ChakraProvider>
    )
};

export default PlayerTurn;