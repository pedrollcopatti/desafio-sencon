import { ArrowUpDownIcon } from "@chakra-ui/icons"
import {
    Td,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Avatar,
    Badge,
    Text,
    Tooltip,
    useColorMode
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { User } from "../utils/types"

type UserItemProps = {
    user: User,
    index: number
}

export default function UserItem(props: UserItemProps) {

    const MotionTr = motion(Tr)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()

    function CompanyName() {
        if (props.index % 3 === 0 && props.index % 5 === 0) {
            return 'TC / SENCON'
        } else if (props.index % 3 === 0) {
            return 'TC'
        } else if (props.index % 5 === 0) {
            return 'SENCON'
        } else {
            return 'Sem empresa'
        }
    }

    return (
        <>
            <MotionTr color={colorMode === 'dark' ? 'white' : 'black'} onClick={onOpen} whileHover={{ backgroundColor: '#61B0FF', color: '#fff', scale: 1.01 }} cursor='pointer' key={props.index}>
                <Td>{props.index + 1}</Td>
                <Td>{props.user.name}</Td>
                <Td overflow='clip'>{props.user.email}</Td>
                <Td overflow='clip'>{props.user.phone}</Td>
                <Td overflow='clip'>{props.user.address.street}, {props.user.address.suite}</Td>
                <Td >{props.user.address.city}</Td>
                <Td overflow='clip' maxWidth='30'>{CompanyName()}</Td>
                <Tooltip hasArrow mt='2' label='Abrir informações'><Td><ArrowUpDownIcon /></Td></Tooltip>
            </MotionTr>
            <Modal size='lg' motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Informações de {props.user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack w='100%' align='center' spacing='8' >
                            <Avatar name={props.user.username} />
                            <Text fontWeight='bold' fontSize='2xl' color='brand.500'>{props.user.username}</Text>
                            <Stack w='100%' spacing='12' direction='row' justify='center' align='center'>
                                <Stack align='center'>
                                    <Badge>ID do usuário</Badge>
                                    <Text>{props.user.id}</Text>
                                </Stack>
                                <Stack align='center'>
                                    <Badge>Posição na tabela</Badge>
                                    <Text>{props.index + 1}</Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}