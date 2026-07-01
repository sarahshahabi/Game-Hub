import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindowClose, FaWindows, FaXbox } from "react-icons/fa"
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs"
import { MdPhoneIphone } from "react-icons/md"
import { IconType } from "react-icons"

interface Props {
  platforms: Platform[]
}



function PlatformIconList({ platforms }: Props) {
 
  const iconMap: {[key: string] : IconType}  = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
  }

  
  return (
    <HStack marginY={1} >
      {platforms.map((p) => <Icon key={p.id} as={iconMap[p.slug]} color={"gray.600"}/>)}
    </HStack>
  )
}

export default PlatformIconList