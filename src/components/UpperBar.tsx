import * as React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import {Score} from './Score'
import {PlayerTurn} from './PlayerTurn'
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const UpperBar = ({playerScore, currentPlayer}: {playerScore: number[] , currentPlayer: number}) => {

    return (
        <ChakraProvider theme={theme}>
            <Flex w="100%" h="100%" bg="gray" direction="column" >
                <Score playerScore= {playerScore}/>
                <PlayerTurn currentPlayer= {currentPlayer}/>
            </Flex>
        </ChakraProvider>
    )
};

export default UpperBar;