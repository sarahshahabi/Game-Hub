import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
}

function GenreList({onSelectGenre} : Props) {
  const { data, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if (error) return null

  return (
    <List.Root unstyled>
      {data.map((genre) =>
        <ListItem key={genre.id} paddingY="5px" textDecor="">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant={"plain"}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List.Root>
  )
}

export default GenreList