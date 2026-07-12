import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function GameCardSckeletone() {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  )
}

export default GameCardSckeletone