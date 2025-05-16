import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2'
import { BANGLADESH_CITIES } from '../api/weatherApi'

export default function LocationSelector({ currentLocation, onLocationChange }) {
  return (
    <div className="mb-6">
      <Listbox value={currentLocation} onChange={onLocationChange}>
        <div className="relative">
          <Listbox.Button className="location-selector">
            <span className="block truncate text-lg font-medium text-gray-900 dark:text-white">
              {currentLocation}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {BANGLADESH_CITIES.map((city) => (
                <Listbox.Option
                  key={city}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-gray-100'
                    }`
                  }
                  value={city}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {city}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600 dark:text-blue-400">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
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