import * as React from 'react';
import CircleIcon from './CircleIcon';
import XIcon from './XIcon'


import { ChakraProvider, Box, Center, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';


const Page = ({player}: {player: number}): JSX.Element => {

    //const [tileState, setTileState] = useState([0,0,0,0,0,0,0,0,0,])

    const displayIcon = (player === 0) ? <CircleIcon /> : <XIcon />

    return (
        <ChakraProvider theme={theme}>
            <Box 
                w="30%" 
                h="30%" 
                bg="gray.100" 
                alignContent="center">
                <Center>
                    {(player === 2) ? <> </> : displayIcon}
                </Center>
            </Box>
        </ChakraProvider>
    )
};

export default Page;
