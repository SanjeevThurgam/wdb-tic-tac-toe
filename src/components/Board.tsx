import * as React from 'react';
// import { useState } from 'react';
import { ChakraProvider, Wrap, theme, WrapItem } from '@chakra-ui/react';
import Tile from './Tile';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
interface BoardProps {
    tileState: number[],
    handleTileClick: (tileIndex: number) => void
}

export const Board = ({tileState, handleTileClick}: BoardProps) => {
    
    return (
        <ChakraProvider theme={theme}>
            <Wrap w="100%" py="7%" h="70%" bg="#373B52" justify="center" alignItems="center">
                {tileState.map((tile, i) => (
                        <WrapItem w="30%" key={i}>
                                <Tile  player={tile} tileIndex={i} handleTileClick={handleTileClick} />
                        </WrapItem>
                    ))}
            </Wrap>
        </ChakraProvider>
    )
};

export default Board;