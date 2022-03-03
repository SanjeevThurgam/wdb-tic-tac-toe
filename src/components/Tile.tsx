import * as React from 'react';
import CircleIcon from './CircleIcon';
import XIcon from './XIcon'


import { ChakraProvider, Flex, theme, Button } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
interface TileProps {
    player: number, tileIndex: number, handleTileClick: (tileIndex: number) => void
}

const Tile = ({player, tileIndex, handleTileClick}: TileProps): JSX.Element => {

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
                <Button onClick={() => handleTileClick(tileIndex)}>
                    {(player === 2) ? <> </> : displayIcon}
                </Button>
            </Flex>
        </ChakraProvider>
    )
};

export default Tile;
