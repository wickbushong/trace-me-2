import React from 'react'

import Accordion from 'react-bootstrap/Accordion'

import ReportVisit from './ReportVisit'

class ReportList extends React.PureComponent {

    renderVisits = flaggedVisits => {
        return flaggedVisits.map(visit => {
            return <ReportVisit visit={visit} />
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center">FLAGGED VISITS</h1>
            </>
        )
    }
}

export default ReportList