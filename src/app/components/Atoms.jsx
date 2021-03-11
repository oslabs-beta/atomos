import React from 'react';
import {
  Tab, Row, Col, ListGroup, Table,
} from 'react-bootstrap';

const Atoms = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '92.5vh',
  }}
  >

    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row style={{ width: '60vw' }}>

        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Atom 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Atom 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Atom 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Atom 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Atom 5
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>

            <Tab.Pane eventKey="#link1">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Component 2</td>
                  </tr>
                  <tr>
                    <td>Component 3</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Component 1</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link3">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Component 2</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link4">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Component 2</td>
                  </tr>
                  <tr>
                    <td>Component 3</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link5">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Component 2</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  </div>
);

export default Atoms;
