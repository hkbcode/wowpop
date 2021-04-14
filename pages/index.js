import Head from 'next/head'
import { Button, ButtonGroup } from "@chakra-ui/react"
// import styles from '../styles/Home.module.css'
import { Heading } from "@chakra-ui/react"



export default function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <Heading>Build Nextjs Websites with Chakra-UI</Heading>
      <Button colorScheme="blue">Start Coding</Button>
    </div>
  )
}
