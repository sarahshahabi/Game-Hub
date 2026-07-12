import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

function GenreList() {
  const { data, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if(error) return null

  return (
    <List.Root unstyled>
      {data.map((g) =>
        <ListItem key={g.id} paddingY="5px" textDecor="">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background)} />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>)}
    </List.Root>
  )
}

export default GenreList