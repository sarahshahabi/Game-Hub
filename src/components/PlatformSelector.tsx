import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

function PlatformSelector() {
  const { data, error, isLoading } = usePlatforms()
  if (error) return null
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Platforms
          <BsChevronRight />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
              data.map(platform => <Menu.Item value={platform.name} key={platform.id}>{platform.name}</Menu.Item>)
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector