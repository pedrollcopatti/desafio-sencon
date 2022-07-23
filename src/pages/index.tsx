import {
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Stack,
} from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import { getUsers } from '../utils/requests'
import { User } from '../utils/types'
import UserItem from '../components/UserItem'

type HomeProps = {
  users: User[]
}

export default function Home(props: HomeProps) {

  return (
    <>
      <Head>
        <title>Desafio TC | Sencon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing='16' h='100vh' align='center'>
        <NavBar title='Tabela de usuários' />
        <Center width='90%'>
          <TableContainer width='100%'>
            <Table size='sm' variant='simple' width='100%' borderRadius='32' overflow='hidden'>
              <TableCaption>Tabela de informações dos usuários TC | Sencon</TableCaption>
              <Thead>
                <Tr>
                  <Th>Nº</Th>
                  <Th>Nome</Th>
                  <Th>Email</Th>
                  <Th>Telefone</Th>
                  <Th>Endereço</Th>
                  <Th>Cidade</Th>
                  <Th>Empresa</Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(props.users).map((user, index) => {
                  return <UserItem key={index} user={user} index={index} />
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Nº</Th>
                  <Th>Nome</Th>
                  <Th>Email</Th>
                  <Th>Telefone</Th>
                  <Th>Endereço</Th>
                  <Th>Cidade</Th>
                  <Th>Empresa</Th>
                  <Th> </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Center>
      </Stack>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const users = await getUsers();

  return {
    props: {
      users: users.data
    }
  }
}