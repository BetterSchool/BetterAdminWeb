import Instrument from "../Data/InstrumentData";

export default function Renting() {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg'>
      {Instrument.map((instrument) => (
        <li
          key={instrument.id}
          className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
          <div className='flex flex-1 flex-col p-8'>
            <img
              className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
              src={instrument.image}
              alt=''
            />
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {instrument.name}
            </h3>
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {instrument.price} kr./ mdr
            </h3>
            <dl className='mt-1 flex flex-grow flex-col justify-between'>
              <dt className='sr-only'>Udlejet?</dt>
              <dd className='mt-3'>
                <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'></span>
              </dd>
            </dl>
          </div>
          <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='-ml-px flex w-0 flex-1 bg-indigo-500'>
                <a className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
                    />
                  </svg>
                  Udlej
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
