import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronUpDown, HiCheck, HiMapPin } from 'react-icons/hi2'
import { BANGLADESH_CITIES } from '../api/weatherApi'

export default function LocationSelector({ currentLocation, onLocationChange }) {
  return (
    <div className="relative z-10">
      <Listbox value={currentLocation} onChange={onLocationChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white/90 dark:bg-gray-800/90 py-3 sm:py-4 pl-4 pr-10 text-left shadow-md backdrop-blur-sm focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm group hover:bg-gray-50/90 dark:hover:bg-gray-700/90 transition-all duration-200">
            <span className="flex items-center space-x-2 sm:space-x-3">
              <HiMapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200" />
              <span className="block truncate text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                {currentLocation}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3">
              <HiChevronUpDown
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors duration-200"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-md py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {BANGLADESH_CITIES.map((city) => (
                <Listbox.Option
                  key={city}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-3 sm:py-4 pl-10 sm:pl-12 pr-4 transition-all duration-200 ${
                      active 
                        ? 'bg-blue-50/80 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100' 
                        : 'text-gray-900 dark:text-gray-100'
                    }`
                  }
                  value={city}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate text-sm sm:text-base ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}>
                        {city}
                      </span>
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-blue-600 dark:text-blue-300' : 'text-blue-500 dark:text-blue-400'
                        }`}>
                          <HiCheck className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
} 