import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

export default function DispatchForm() {
    return (
        <>
            {/* Logo, Address, Contact */}
            <div>

            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Form style={{ width: '100%', margin: '10px', textAlign: 'center' }}>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={1}>
                                    Name
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={1}>
                                    Company
                                    </Form.Label>
                                    <Col>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={1}>
                                    Address
                                    </Form.Label>
                                    <Col>
                                    <Form.Control as="textarea" aria-label="With textarea" />
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={1}>
                                    Order#
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={1}>
                                    Tracking#
                                    </Form.Label>
                                    <Col>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Form>
                
            </div>

            {/* Transmittal Equipment Details */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Table style={{ width: '90%', margin: '10px', textAlign: 'center' }} striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Serial#</th>
                            <th>Phone#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* Submit and Clear */}
            <div style={{margin: '10px'}}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Button variant="primary" type="submit" style={{marginLeft: '10px'}}>
                    Clear
                </Button>
            </div>
            
            
        </>
    )
}