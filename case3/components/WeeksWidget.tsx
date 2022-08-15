import React, { useState, useEffect, createRef } from 'react'
import moment from 'moment'
export const WeeksWidget: React.FC = ({}) => {
  const [weeks, setWeeks] = useState<Array<number>>([])
  const [page, setPage] = useState<number>(0)
  const scrollRef = createRef<HTMLUListElement>()
  const pageSize = 8

  const getWeeks = (): number => {
    const startOfYear = moment().startOf('year')
    const endOfYear = moment().endOf('year')
    const weeks = endOfYear.diff(startOfYear, 'weeks')
    return weeks
  }

  useEffect(() => {
    const weeks = getWeeks()
    setWeeks(
      Array(weeks)
        .fill(0)
        .map((_, i) => i + 1)
    )
    if (scrollRef.current) scrollRef.current.scrollTo(0, 10)
  }, [])

  const paginate = (array: Array<number>) => {
    var endIndex = Math.min((page + 1) * pageSize, array.length)
    return array.slice(Math.max(endIndex - pageSize, 0), endIndex)
  }

  const onScroll = (): void => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      if (scrollHeight - scrollTop === clientHeight && page < Math.ceil(weeks.length / pageSize)) {
        setPage((page) => page + 1)
        scrollRef.current.scrollTo(0, 10)
      } else if (scrollTop === 0) {
        setPage((page) => page - 1)
        scrollRef.current.scrollTo(0, clientHeight / 2)
      }
    }
  }

  return (
    <div>
      <h3>Haftalar</h3>
      <ul className="list-group w-100 week-holder" ref={scrollRef} onScroll={onScroll}>
        {paginate(weeks).map((week, index) => {
          return (
            <li key={week} className="list-group-item d-flex flex-row ">
              <div className="circle">{week}</div>
              <span className="ms-3 color-primary">
                {week}. Hafta {moment().year()}
              </span>
            </li>
          )
        })}
        <li style={{ height: '300px' }}></li>
      </ul>
    </div>
  )
}
