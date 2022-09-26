import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Wrapper, FlexCont } from '../styles/globals'



export default function About() {
  return (
    <Wrapper>
      About
      <FlexCont color='red'>
        I love to eat donuts. 
      </FlexCont>
    </Wrapper>
  )
}
