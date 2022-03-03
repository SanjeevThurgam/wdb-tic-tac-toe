import * as React from 'react';
import CircleIcon from './CircleIcon';
import XIcon from './XIcon'


import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


const Tile = ({player}: {player: number}): JSX.Element => {

    const displayIcon = (player === 0) ? <CircleIcon w="100%" h="90%"/> : <XIcon w="100%" h="90%"/>

    return (
        <ChakraProvider theme={theme}>
            <Flex 
                w="100%" 
                h="100%" 
                bg="#626887" 
                align="center"
                justify="center"
                borderRadius="xl">
                {/* <Center> */}
                    {(player === 2) ? <> </> : displayIcon}
                {/* </Center> */}
            </Flex>
        </ChakraProvider>
    )
};

export default Tile;
