import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  selectedSortOrder:string | null
}


function SortSelector({onSelectSortOrder, selectedSortOrder}: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ]

  const currentSortOrder = sortOrders.find((sort) => sort.value === selectedSortOrder)

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Order by: {currentSortOrder?.label || "Relevance"} 
          <BsChevronRight />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => {
              return <Menu.Item onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.label}>{order.label}</Menu.Item>
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector