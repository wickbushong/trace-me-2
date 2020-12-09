import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const ActiveVisit = ({visit, handleCheckOut}) => {
    
    const handleOnClick = () => {
        handleCheckOut(visit.id)
    }

    return (
        <ListGroup.Item key={visit.id}>
            {visit.user.first_name} {visit.user.last_name}<Button variant="info" size="sm" className="float-right" onClick={handleOnClick}>Check Out</Button>
        </ListGroup.Item>
    )
}

export default ActiveVisit