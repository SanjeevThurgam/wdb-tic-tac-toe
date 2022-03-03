import * as React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import {Score} from './Score'
import {PlayerTurn} from './PlayerTurn'
// import { ColorModeSwitcher } from './ColorModeSwitcher';

interface UpperBarProps {player1Score: number, player2Score: number, currentPlayer: number, gameNotOver: number}

export const UpperBar = ({player1Score, player2Score, currentPlayer, gameNotOver}: UpperBarProps) => {


    return (
        <ChakraProvider theme={theme}>
            <Flex  w="100%" h="20%" bg="#373B52" direction="column" alignItems="center" justify="space-between">
                <Score player1Score= {player1Score} player2Score={player2Score}/>
                {gameNotOver ? <PlayerTurn currentPlayer= {currentPlayer}/> : <></>}
            </Flex>
        </ChakraProvider>
    )
};

export default UpperBar;