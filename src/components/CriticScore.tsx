import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}

function CriticScore({ score }: Props) {
  
  const color = score > 80 ? "green" : score > 70 ? "orange" : "";


  return (
    <Badge color={color} fontSize={"14px"} borderRadius={2} paddingX={2} fontWeight={700}>{score}</Badge>
  )
}

export default CriticScore