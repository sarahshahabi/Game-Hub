import { Grid, GridItem, HStack } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Game, Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav nav" "aside main main"`
    }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={5}>
        <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery ,genre})} selectedGenre={gameQuery.genre} />
      </GridItem>


      <GridItem area="main">
        <HStack paddingLeft={4} gap={5} marginBottom={5}>
          <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
          <SortSelector /> 
      </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App