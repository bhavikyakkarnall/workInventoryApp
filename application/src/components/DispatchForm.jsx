import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import logo from '../assets/ADT Logo.png'

export default function DispatchForm() {
    return (
        <>
            {/* Printable Screen */}
            <div style={{margin: '30px'}}>

                {/* Logo, Address, Contact */}
                <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginRight: '40px', marginBottom: '20px' }}>
                    <Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }}/>
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
                                <th>CS#</th>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Serial#</th>
                                <th>Phone#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>2870001</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>+64279873820</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Submit and Clear */}
                <div style={{ margin: '10px' }}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Button variant="primary" type="submit" style={{ marginLeft: '10px' }}>
                        Clear
                    </Button>
                </div>

            </div>

        </>
    )
}