import * as React from 'react';
import CircleIcon from './CircleIcon';
import XIcon from './XIcon'


import { ChakraProvider, Flex, theme, Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
interface TileProps {
    player: number, tileIndex: number, handleTileClick: (tileIndex: number) => void
}

const Tile = ({player, tileIndex, handleTileClick}: TileProps): JSX.Element => {

    const displayIcon = (player === 0) ? <CircleIcon w="100%" h="90%"/> : <XIcon w="100%" h="90%"/>

    return (
        <ChakraProvider theme={theme}>
            <Flex 
                as="button"
                w="100%" 
                h="100%" 
                bg="#626887" 
                align="center"
                justify="center"
                borderRadius="xl"
                onClick={() => handleTileClick(tileIndex)}
                _hover={{
                        bg: "#565b76"
                    }}
                _active={{
                    bg: '#565b76',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}>
                <Box 
                    as='button' 
                    w='100px' 
                    h='125px' 
                    >
                    {(player === 2) ? <> </> : displayIcon}
                </Box>
            </Flex>
        </ChakraProvider>
    )
};

export default Tile;
