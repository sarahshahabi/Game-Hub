import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSckeletone from './GameCardSkeletone'
import GameCardContainer from './GameCardContainer'


function GameGrid() {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="32px" padding={4}>
        {isLoading && skeletons.map((s) => <GameCardContainer><GameCardSckeletone key={s} /></GameCardContainer>)}
        {games.map((game) => <GameCardContainer><GameCard game={game} key={game.id} /></GameCardContainer>)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid