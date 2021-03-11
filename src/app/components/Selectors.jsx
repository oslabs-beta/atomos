import React from 'react';
import {
  Tab, Row, Col, ListGroup, Table,
} from 'react-bootstrap';

const Selectors = () => (
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
              Selector 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Selector 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Selector 3
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>

            <Tab.Pane eventKey="#link1">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Atoms</th>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atom 1</td>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Atom 2</td>
                    <td>Component 2</td>
                  </tr>
                  <tr>
                    <td>Atom 3</td>
                    <td />
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Atoms</th>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atom 1</td>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Atom 2</td>
                    <td>Component 2</td>
                  </tr>
                  <tr>
                    <td />
                    <td>Component 3</td>
                  </tr>
                  <tr>
                    <td />
                    <td>Component 4</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>

            <Tab.Pane eventKey="#link3">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Atoms</th>
                    <th>Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atom 1</td>
                    <td>Component 1</td>
                  </tr>
                  <tr>
                    <td>Atom 2</td>
                    <td>Component 2</td>
                  </tr>
                  <tr>
                    <td>Atom 3</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Atom 4</td>
                    <td />
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

export default Selectors;
