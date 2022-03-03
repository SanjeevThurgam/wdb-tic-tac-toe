import * as React from 'react';
import { Button, ChakraProvider, Flex, Text, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

interface EndBoardProps {winner: number}


export const EndBoard = ({winner}: EndBoardProps) => {

    const color = winner ? '#517AE4' : '#C08DE9';
    const winnerString = winner ? 'Player 1 Won !' : 'Player 2 Won !';

    return (
        <ChakraProvider theme={theme}>
            <Flex  w="100%" h="70%" bg="#373B52" direction="column" alignItems="center" justify="flex-start">
                <Text fontSize='6xl' color={color} paddingTop='50px' paddingBottom= '50px'>
                    {winnerString}
                </Text>
                <Button color= 'white' bg='#262A3F' boxShadow='6px 6px 0px 0px #626887' borderRadius='xl' size='lg'>
                    Play Again!
                </Button>
                <Button textDecoration='underline' bg='#373B52' color='white' margin='15px'>
                    Reset score
                </Button>
            </Flex>
        </ChakraProvider>
    )
};

export default EndBoard;