import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logo from '../assets/ADT Logo.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DispatchForm() {

    const handleSaveAsPDF = () => {
        const input = document.getElementById('print');
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('dispatch_form.pdf');
        });
    };

    return (
        <>
            {/* Printable Screen */}
            <div id='print' style={{ margin: '30px' }}>

                {/* Logo, Address, Contact */}
                <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginRight: '40px', marginBottom: '20px' }}>
                    <Image src={logo} thumbnail style={{ width: '200px', height: 'auto', border: 'none' }} />
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

            </div>

            {/* Submit and Clear */}
            <div style={{ margin: '10px' }}>
                <Button variant="primary" onClick={handleSaveAsPDF}>
                    Save as PDF
                </Button>

                <Button variant="primary" type="submit" style={{ marginLeft: '10px' }}>
                    Clear
                </Button>
            </div>
        </>
    );
}
