import dayjs from 'dayjs'
import durationPlugin from 'dayjs/plugin/duration'
import { useEffect, useState } from 'react'

dayjs.extend(durationPlugin)

const format = (time: number) => {
  const duration = dayjs.duration(time)
  const { minutes, seconds } = {
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }

  if (!minutes) return `${seconds}s`
  if (!seconds) return `${minutes}m`

  return `${minutes}m${seconds}s`
}

/**
 * useTimer takes  the starting point and reduce one second from it until 0
 * @returns timer - left time in seconds
 * @returns formattedTimer - format schema example: 1m48s | 3s
 */
export const useTimer = () => {
  const [timer, setTimer] = useState(0)
  const [isCount, setIsCount] = useState(false)

  useEffect(() => {
    if (!isCount) return undefined

    let intervalId: NodeJS.Timeout | undefined

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId)
            return 0
          }
          return prevTime - 1000
        })
      }, 1000)
    } else {
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [timer, isCount])

  /**
   * @param startTime - number in milliseconds at which timer starts
   */
  const startTimer = (start: number) => {
    setTimer(start)
    setIsCount(true)

    return timer
  }

  return { timer, formattedTimer: format(timer), startTimer }
}
