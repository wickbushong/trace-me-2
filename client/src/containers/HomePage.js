import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class HomePage extends React.PureComponent {

    render() {
        return (
            <Container>
                <br></br>
                <Jumbotron>
                    <h1>Welcome to TraceMe</h1>
                    <h3>Contact tracing made easy.</h3>
                    <p>
                        Sign up and start keeping track of your comers and goers.
                    </p>
                    <p>
                        <Button as={NavLink} to="/signup" variant="info">Get Started</Button>
                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

export default HomePage