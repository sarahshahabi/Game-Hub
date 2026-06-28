import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        {/* <Card.Title> {game.name}</Card.Title> */}
        <Heading fontSize="lg">{game.name }</Heading>

      </Card.Body>
    </Card.Root>
  )
}

export default GameCard