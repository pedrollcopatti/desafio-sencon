import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Spacer, Stack, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../assets/logo_sencon.png'

type NavBarProps = {
    title: string
}

export default function NavBar(props: NavBarProps) {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex w='100%' h='16' shadow='base' align='center' justify='center'>
            <Stack spacing='4' direction='row' w='95%' align='center'>
                <Image alt="logo_sencon" width='40' height='40' src={logo} />
                <Text fontWeight='bold'>{props.title}</Text>
                <Spacer />
                <IconButton variant='ghost' aria-label='color-mode' icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
            </Stack>
        </Flex>

    )
}