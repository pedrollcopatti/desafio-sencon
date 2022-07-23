import { Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../assets/logo_sencon.png'

type NavBarProps = {
    title: string
}

export default function NavBar(props: NavBarProps) {
    return (
        <Flex w='100%' h='16' shadow='base' align='center' justify='center'>
            <Stack spacing='4' direction='row' w='95%' align='center'>
                <Image width='40' height='40' src={logo} />
                <Text fontWeight='bold' color='black.500'>{props.title}</Text>
            </Stack>
        </Flex>

    )
}