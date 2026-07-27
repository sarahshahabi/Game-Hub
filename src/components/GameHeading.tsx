import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
  GameQuery: GameQuery
}

function GameHeading({ GameQuery }: Props) {
  // Games
  // Genre Ganes
  // Platform Genre games

  const heading = `${GameQuery.platform?.name || ''} ${GameQuery.genre?.name || ""} Games`

  return (
    <Heading as={"h1"} marginY={3} fontSize={"32px"} color={"#ffafcc"}>{heading}</Heading>
  )
}

export default GameHeading