import React, { Component, PropTypes } from 'react'
import EventItem from 'components/event/event_item'
import { observer } from 'mobx-react';
import moment from 'moment';

@observer
export default class EventList extends Component {
  constructor(props) {
    super(props)
  }

  momentNow = () => {
    return moment();
   }

  render () {
    console.log(this.momentNow()._d)

    let events = this.context.store.events.map((event, i) => {
      console.log('Event(' + event.id + ') at ' + event.scheduled_at)
      console.log('Now : ' + new Date() + ' (' + moment.utc( new Date() ).format() + ')')
      if (event.scheduled_at < moment.utc( new Date() ).format()){
        return ;
      } else {
        return (<EventItem event={event} key={`event-${event.id}`} />)
      }
    })

    return (
      <div className="event-index-flex">
        <div className="coming-events-flex">
          <h3 className="coming-soon">Coming soon</h3>
          <div className="event-list-wrap" >
            {events}
          </div>
        </div>
      </div>
    )
  }
}

EventList.contextTypes = {
  store: PropTypes.object
}
