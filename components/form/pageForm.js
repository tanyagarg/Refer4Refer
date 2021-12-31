import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const PageForm = () => {
    return (
        <div className="spacer" id="referralContainer">
            <div  id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Get Referral</h1>
                            <h6 className="subtitle">Please add as accurate information as possible</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="row">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" className="form-control" id="name" placeholder="Name" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Graduation Year</Label>
                                <Input type="text" className="form-control" id="password" placeholder="Year" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="confirmpwd">Resume Link</Label>
                                <Input type="password" className="form-control" id="confirmpwd" placeholder="Resume" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="password">Company</Label>
                                <Input type="text" className="form-control" id="company" placeholder="Company" />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="confirmpwd">JobId</Label>
                                <Input type="password" className="form-control" id="jobId" placeholder="jobId" />
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                                <Button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageForm;
