import * as React from 'react';
import CircleIcon from './CircleIcon';
import XIcon from './XIcon'


import { ChakraProvider, Box, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


const Tile = ({player}: {player: number}): JSX.Element => {

    const displayIcon = (player === 0) ? <CircleIcon boxSize="100%"/> : <XIcon boxSize="100%"/>

    return (
        <ChakraProvider theme={theme}>
            <Box 
                w="100%" 
                h="100%" 
                bg="#626887" 
                alignContent="center"
                borderRadius="xl">
                {/* <Center> */}
                    {(player === 2) ? <> </> : displayIcon}
                {/* </Center> */}
            </Box>
        </ChakraProvider>
    )
};

export default Tile;
