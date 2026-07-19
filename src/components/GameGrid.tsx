import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSckeletone from './GameCardSkeletone'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

function GameGrid({ selectedGenre, selectedPlatform}: Props) {
  const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform )
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="16px" padding={4}>
        {isLoading && skeletons.map((s) => <GameCardContainer key={s}><GameCardSckeletone key={s} /></GameCardContainer>)}
        {data.map((game) => <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid