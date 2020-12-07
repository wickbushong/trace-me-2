import React from 'react'
import { connect } from 'react-redux'

import ListGroup from 'react-bootstrap/ListGroup'
import ActiveVisit from '../components/visits/ActiveVisit'

import checkOut from '../actions/visits/checkOut'

const CurrentVisitorsList = ({visits, checkOut}) => {

    const renderVisits = visits => {
        return visits.map(visit => {
            return <ActiveVisit visit={visit} key={visit.id} handleCheckOut={checkOut} />
        })
    }

    return (
        <>
            <h1 className="text-center">VISITORS</h1>
            <br></br>
            <ListGroup>
                {renderVisits(visits)}
            </ListGroup>
        </>
    )
}

export default connect(null, {checkOut})(CurrentVisitorsList)