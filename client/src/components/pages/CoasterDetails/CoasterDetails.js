import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import CoastersService from '../../../services/coasters.service';
import { isOwner } from '../../../utils'


export default class CoasterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coaster: null
    }

    this.coasterService = new CoastersService();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.coasterService.getOneCoaster(id)
      .then(res => {
        this.setState({
          ...this.state,
          coaster: res.data.coaster
        })
      })
      .catch(err => console.error(err))

  }

  render() {

    return (
      <Container>
        {
          this.state.coaster ?
            <Row>
              <Col md={6}>
                <h1>Montaña rusa {this.state.coaster.title}</h1>
                <h3>Descripción: {this.state.coaster.description}</h3>

                <hr />

                <p>Inversiones: {this.state.coaster.inversions}</p>
                <p>Longitud: {this.state.coaster.length}</p>
              </Col>
              <Col md={4}>
                <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title} />
              </Col>
              {isOwner(this.state.coaster.owner, this.props.loggedUser) && <Button>Editar</Button>}
            </Row>

            :
            <h3>Cargando...</h3>
        }
      </Container>
    )
  }
}
