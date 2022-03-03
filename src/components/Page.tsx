import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import UpperBar from './UpperBar';
import Board from './Board';
import EndBoard from './EndBoard';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Page = () => {

    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [gameNotOver, setGameNotOver] = useState(1);
    const [winner, setWinner] = useState(-1);
    // const playerScore = [0, 0];
    // const currentPlayer = 0;
    const [tileState, setTileState] = useState([2,2,2,2,2,2,2,2,2])
    // const tileState = [0,1,0,0,0,0,1,0,0,]

    // const gameNotOver = 0;
    // const winner = 0;
    const checkGameOver = () => {
        checkRows();
        checkColumns();
        checkDiagonals();
        console.log(gameNotOver)

    }

    useEffect(() => {
        if (!gameNotOver) {
            if (!winner) {
                setPlayer2Score(player2Score + 1);
            } else {
                setPlayer1Score(player1Score + 1);
            }
        }
        
    }, [gameNotOver]);   

    const checkRows = () => {
            if (tileState[0] === tileState[1] && tileState[1] === tileState[2] && tileState[0] !== 2) {
                setWinner(tileState[0]);
                setGameNotOver(0);
            }
            else if (tileState[3] === tileState[4] && tileState[4] === tileState[5] && tileState[3] !== 2) {
                setWinner(tileState[3]);
                setGameNotOver(0);
            }
            else if (tileState[6] === tileState[7] && tileState[7] === tileState[8] && tileState[6] !== 2) {
                setWinner(tileState[6]);
                setGameNotOver(0);
            }
    }

    const checkColumns = () => {
        if (tileState[0] === tileState[3] && tileState[3] === tileState[6] && tileState[0] !== 2) {
            setWinner(tileState[0]);
            setGameNotOver(0);
        }
        else if (tileState[1] === tileState[4] && tileState[4] === tileState[7] && tileState[1] !== 2) {
            setWinner(tileState[1]);
            setGameNotOver(0);
        }
        else if (tileState[2] === tileState[5] && tileState[5] === tileState[8] && tileState[2] !== 2) {
            setWinner(tileState[2]);
            setGameNotOver(0);
        }
    }

    const checkDiagonals = () => {
        if (tileState[0] === tileState[4] && tileState[4] === tileState[8] && tileState[0] !== 2) {
            setWinner(tileState[0]);
            setGameNotOver(0);
        }
        else if (tileState[2] === tileState[4] && tileState[4] === tileState[6] && tileState[2] !== 2) {
            setWinner(tileState[2]);
            setGameNotOver(0);
        }
    }

    const handleTileClick = (tileIndex: number) => {
        if (tileState[tileIndex] === 2) {
            const tileStateCopy = tileState;
            tileStateCopy[tileIndex] = currentPlayer;
            setTileState(tileStateCopy);
            setCurrentPlayer(currentPlayer ? 0 : 1)
            checkGameOver()
            console.log(tileState);
        }
    }

    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100vh" bg="#373B52" justify="center"> 
                <Flex w="100vw" h="100vh" bg="#373B52" justify="center">
                    <Flex w="45%" h="100%" bg="#373B52" direction="column" alignItems="center" align="center">
                        <UpperBar player1Score={player1Score} player2Score={player2Score} currentPlayer={currentPlayer} gameNotOver={gameNotOver}/>
                        {gameNotOver ? <Board tileState={tileState} handleTileClick={handleTileClick} /> : <EndBoard winner={winner}/>}
                    </Flex> 
                </Flex>
            </Flex>
        </ChakraProvider>
    )
};

export default Page;