import { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/bn'
import momentHijri from 'moment-hijri'

export default function DateTimeDisplay() {
  const [date, setDate] = useState(moment())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(moment())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const gregorianDate = date.format('dddd, MMMM D, YYYY')
  const bengaliDate = moment().locale('bn').format('dddd, MMMM D, YYYY')
  const hijriDate = momentHijri().format('iD iMMMM iYYYY')
  const currentTime = date.format('hh:mm:ss A')

  return (
    <div className="weather-card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Date & Time
      </h3>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-accent">
            {currentTime}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">English</span>
            <span className="text-sm text-gray-900 dark:text-white">{gregorianDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">বাংলা</span>
            <span className="text-sm text-gray-900 dark:text-white">{bengaliDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Hijri</span>
            <span className="text-sm text-gray-900 dark:text-white">{hijriDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 