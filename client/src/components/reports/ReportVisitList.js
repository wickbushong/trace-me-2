import React from 'react'

import Accordion from 'react-bootstrap/Accordion'

import ReportVisit from './ReportVisit'

class ReportVisitList extends React.PureComponent {

    renderVisits = flaggedVisits => {
        return flaggedVisits.map(visit => {
            return <ReportVisit key={visit.id} visit={visit} />
        })
    }

    render() {
        const {report} = this.props
        return (
            <>
                <h1 className="text-center">FLAGGED VISITS</h1>
                <Accordion>
                    {this.renderVisits(report.flag_visits)}
                </Accordion>
            </>
        )
    }
}

export default ReportVisitList