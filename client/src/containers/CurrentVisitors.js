import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class CurrentVisitors extends React.Component {

    render() {
        return(
            <>
                <br></br>
                <h1 className="text-center">CURRENT VISITORS</h1>
                <br></br>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </>
        )
    }
}

export default CurrentVisitors