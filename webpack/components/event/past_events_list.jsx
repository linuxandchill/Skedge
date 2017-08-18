import React, { Component, PropTypes } from 'react'
import EventItem from 'components/event/event_item'
import { observer } from 'mobx-react';

@observer
export default class PastEventsList extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let past_events = this.context.store.events.map((event, i) => {
      console.log('Event(' + event.id + ') at ' + event.scheduled_at)
      console.log('Now : ' + new Date() + ' (' + moment.utc( new Date() ).format() + ')')
      if (event.scheduled_at < moment.utc( new Date() ).format()){
        return (<EventItem event={event} key={`event-${event.id}`} />)
      } else {
        return ;
      }
    })

    let sorted_events = past_events.sort((a,b) => {
      return moment.utc(new Date(a.scheduled_at).getTime())
        - moment.utc(new Date(b.scheduled_at).getTime())
    }).reverse();

    return(
      <div className="event-index-flex">

        <div className="coming-events-flex">
          <h3 className="coming-soon">Past Events</h3>
          <div className="event-list-wrap" >
            {sorted_events}
          </div>
        </div>

      </div>
      )
  }
}
PastEventsList.contextTypes = {
  store: PropTypes.object
}
