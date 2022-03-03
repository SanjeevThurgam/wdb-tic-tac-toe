import * as React from 'react';
// import { useState } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import UpperBar from './UpperBar';
import Board from './Board';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Page = () => {

    // const [playerScore, setPlayerScore] = useState([0,0]);
    // const [currentPlayer, setCurrentPlayer] = useState(0);
    const playerScore = [0, 0];
    const currentPlayer = 0;
    // const [tileState, setTileState] = useState([0,0,0,0,0,0,0,0,0,])
    // setTileState([0,0,0,0,0,0,0,0,0,])
    const tileState = [0,1,0,0,0,0,1,0,0,]

    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100vh" bg="#373B52" justify="center">
                <Flex w="50%" h="100%" bg="#373B52" direction="column" alignItems="center" align="center">
                    <UpperBar playerScore={playerScore} currentPlayer= {currentPlayer}/>
                    <Board tileState={tileState} />
                </Flex> 
            </Flex>
        </ChakraProvider>
    )
};

export default Page;