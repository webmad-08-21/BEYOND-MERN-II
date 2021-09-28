import React from 'react'
import { Container } from 'react-bootstrap'
import CoastersList from './CoastersList'

export default function CoastersPage({ loggedUser }) {
  return (
    <Container>
      <h1>Coasters Page</h1>

      <CoastersList loggedUser={loggedUser} />
    </Container>
  )
}
