import {  Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { ColorModeButton } from "./components/ui/color-mode"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg:`"nav nav nav" "aside main main"`
    }}>
      <GridItem area="nav">
        <NavBar />
        <ColorModeButton/>
      </GridItem>
   
        <GridItem area="aside" bg="gold" display={{base:"none", lg:"block"}}>
          Aside
        </GridItem>

 
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
  </Grid>
  )
}

export default App