import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'


interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}


function PlatformSelector({onSelectPlatform, selectedPlatform} : Props) {
  const { data, error, isLoading } = usePlatforms()
  if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          { selectedPlatform?.name || "Platforms"}
          <BsChevronRight />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
              data.map(platform => <Menu.Item onClick={() => onSelectPlatform(platform)} value={platform.name} key={platform.id}>{platform.name}</Menu.Item>)
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector