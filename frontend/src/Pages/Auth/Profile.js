import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { default as axios } from 'axios';

export default function Profile() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmInput, setConfirmInput] = useState('');
    const [currentInput, setCurrentInput] = useState('');
    
    const handleNameField = (e) => {setNameInput(e.target.value)}
    const handleEmailField = (e) => {setEmailInput(e.target.value)}
    const handleAddressField = (e) => {setAddressInput(e.target.value)}
    const handlePasswordField = (e) => {setPasswordInput(e.target.value)}
    const handleConfirmField = (e) => {setConfirmInput(e.target.value)}
    const handleCurrentField = (e) => {setCurrentInput(e.target.value)}

    const user = JSON.parse(localStorage.getItem('user'));
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
    const [show, setShow] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    useEffect(function() {
        axios.get('/users/profile', {
            crossDomain: true,
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(function (response) {
                let userData = response.data.data;
                setNameInput(userData.name);
                setEmailInput(userData.email);
                setAddressInput(userData.address);
            })
            .catch(function (error) {
                // we can add some logging mechanism to report the error
                console.log('Error : Can not load data !');
            });
    }, [user])

    function submitUpdateProfileForm(e) {
        setSubmitDisabled(true);
        e.preventDefault();
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            
            setPasswordInput('');
            setConfirmInput('');
            setCurrentInput('');
            setValidated(true);
            setSubmitDisabled(false);

            return;
        }

        // check update password fields
        if ((passwordInput !== '') || (confirmInput !== '') || (currentInput !== '')) {
            if (!(passwordInput && confirmInput && currentInput)) {
                e.stopPropagation();
                alert('Invalid password , please enter all required fields !');

                setPasswordInput('');
                setConfirmInput('');
                setCurrentInput('');
                setSubmitDisabled(false);
                
                return;
            }
        }

        axios.put('/users/profile', {
                id: user.id,
                name: nameInput,
                email: emailInput,
                address: addressInput,
                password: passwordInput,
                confirm: confirmInput,
                current: currentInput,
            },  {
                crossDomain: true,
                headers: { Authorization: `Bearer ${user.token}` }
            })
            .then(function (response) {
                let userUpdatedData = response.data.data;
                
                // set user data
                setNameInput(userUpdatedData.name);
                setEmailInput(userUpdatedData.email);
                setAddressInput(userUpdatedData.address);
                setPasswordInput('');
                setConfirmInput('');
                setCurrentInput('');

                // update session data
                user.name = userUpdatedData.name;
                user.address = userUpdatedData.address;
                localStorage.setItem('user', JSON.stringify(user));

                // show success message
                setShow(true);
                setMessage(response.data.message);
                setMessageType('success');
            })
            .catch(function (error) {
                setPasswordInput('');
                setConfirmInput('');
                setCurrentInput('');

                // we can add some logging mechanism to report the error

                // show error message
                setMessage(error.response.data.message);
                setMessageType('danger');
            })
            .finally(function () {
                setSubmitDisabled(false);
            });
    }

    return (
        <Row>
            <Col md="8" className="mx-auto screen-container">
                <h3 className="text-center mb-1">Profile</h3>
                <p className="text-center">You can update your information and reset your password , using the form below</p>

                {
                    message &&
                    <Alert variant={messageType} onClose={() => setShow(false)} show={show} dismissible>
                        {message}
                    </Alert>
                }

                <Card className="mt-5">
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={submitUpdateProfileForm}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" value={nameInput} onChange={handleNameField} required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={emailInput} onChange={handleEmailField} disabled />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" value={addressInput} onChange={handleAddressField} required />
                            </Form.Group>

                            <hr className="my-4" />

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter current password" value={currentInput} onChange={handleCurrentField} noValidate />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" value={passwordInput} onChange={handlePasswordField} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridConfirm">
                                    <Form.Label>Confirm</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm new password" value={confirmInput} onChange={handleConfirmField} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col className="w-100">
                                    <Button variant="primary" type="submit" className="d-block mx-auto" disabled={submitDisabled}>
                                        Update
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
