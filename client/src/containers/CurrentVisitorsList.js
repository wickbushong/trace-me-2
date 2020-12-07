import React from 'react'
import { connect } from 'react-redux'

import ListGroup from 'react-bootstrap/ListGroup'
import ActiveVisit from '../components/visits/ActiveVisit'

import checkOut from '../actions/visits/checkOut'

class CurrentVisitorsList extends React.PureComponent {
    // ToDo: use hooks to animate collapse of visitor list?

    renderVisits(visits) {
        return visits.map(visit => {
            return <ActiveVisit visit={visit} key={visit.id} handleCheckOut={this.props.checkOut} />
        })
    }

    render() {
        const {visits} = this.props
        return(
            <>
                <h1 className="text-center">VISITORS</h1>
                <br></br>
                <ListGroup>
                    {this.renderVisits(visits)}
                </ListGroup>
            </>
        )
    }
}

export default connect(null, {checkOut})(CurrentVisitorsList)