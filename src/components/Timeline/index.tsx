import classNames from 'classnames'
import * as React from 'react'

import './Timeline.css'

interface ITimelineProps {
  currentActive?: number;
  data?: any[];
}

interface ITimelineState {
  currentActive: number;
  id: string;
  progressBarWidth: number;
  timelineWidth: number | string;
}

function getOffset(el: any) {
  let xPos = 0;
  let yPos = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    xPos += el.offsetLeft - el.scrollLeft;
    yPos += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: yPos, left: xPos };
}

const timelineData = [
  'born',
  'childhood',
  'adulthood',
  'born',
  'childhood',
  'adulthood',
  'born',
  'childhood',
  'adulthood',
  'born',
  'childhood',
  'adulthood',
  'death'
]

class Timeline extends React.PureComponent<ITimelineProps, ITimelineState> {
  public state = {
    currentActive: this.props.currentActive || 0,
    id: `timeline-${Math.random().toString(36).slice(4)}`,
    progressBarWidth: 0,
    timelineWidth: '100%'
  }

  public mountTags = (tags: string[]) => tags.map((tag: string, index: number) => {
    const key = `timelineEvent-${index}`
    return (
      <li id={key}
        key={key}
        onClick={this.onClickEvent(key, index)}
        className={classNames('timeline__event', {
          'timeline__event--active': this.state.currentActive === index
        })}>
        <span className="event__text--up">{tag}</span>
        <span className="event__dot" />
        <span className="event__text--down">{tag}</span>
      </li>
    )
  })

  public getTimelineWidth = () => {
    const timelineEvents = document.querySelector('.timeline__events')
    const timelineWidth = timelineEvents ? `${timelineEvents.scrollWidth}px` : '100%';
    return timelineWidth
  }

  public onClickEvent = (id: string, currentActive: number) => () => {
    this.resizeProgressBar(id)
    this.setState({ currentActive })
  }

  public resizeProgressBar = (id: string) => {
    const currentActiveEvent = document.querySelector(`#${id}`)
    if (currentActiveEvent) {
      const currentActiveEventRect = currentActiveEvent.getBoundingClientRect()
      const currentActiveEventWidth = currentActiveEventRect.width
      const progressBarWidth = getOffset(currentActiveEvent).left + (currentActiveEventWidth / 2)
      this.setState({ progressBarWidth })
    }
  }

  public componentDidMount() {
    this.setState({ timelineWidth: this.getTimelineWidth() })
    const wind: any = window
    wind.requestIdleCallback(() => this.resizeProgressBar(`${this.state.id} .timeline__event--active`))
  }

  public render () {
    const { id, progressBarWidth, timelineWidth } = this.state

    return (
      <div id={id} className="timeline">
        <div className="timeline__wrapper">
          <span className="timeline__bar--background" style={{ width: timelineWidth }} />
          <span className="timeline__bar--progress" style={{ width: progressBarWidth }} />
          <ol className="timeline__events">
            {this.mountTags(timelineData)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Timeline
