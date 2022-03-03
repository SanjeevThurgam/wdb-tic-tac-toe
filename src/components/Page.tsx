import * as React from 'react';
// import { useState } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { UpperBar } from './UpperBar';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Page = () => {

    // const [playerScore, setPlayerScore] = useState([0,0]);
    // const [currentPlayer, setCurrentPlayer] = useState(0);
    const playerScore = [0, 0];
    const currentPlayer = 0;
    //const [tileState, setTileState] = useState([0,0,0,0,0,0,0,0,0,])

    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100vh" bg="gray" direction="column" >
                <UpperBar playerScore={playerScore} currentPlayer= {currentPlayer}/>
            </Flex>
        </ChakraProvider>
    )
};

export default Page;