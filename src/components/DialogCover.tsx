'use client'

export default function DialogCover() {

    const isOpen = false
    const isVolume = false
    const flag = './flags/UA.svg'

    return (
        <div className='dialog-cover-bg  pt-3 overflow-hidden px-6 relative flex justify-between items-center'>

            <button className='px-10 py-1 w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:border-gray-200 hover:text-gray-200 transition duration-300'>
          
                on
            </button>

            <div className='absolute z-10 transform -translate-x-1/2 left-1/2 top-2.5'>
                <img src="./ai.svg" alt="ai" />
            </div>

            <div className='flex justify-between'>
                <button className='w-8 h-8 p-1.5 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-gray-200 hover:text-gray-200 transition duration-300'>
                    <img src={isOpen ? './arrow-down.svg' : './arrow-up.svg'} alt="arrow-down" />
                </button>
                <button className='w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center overflow-hidden ms-3 hover:border-gray-200 hover:text-gray-200 transition duration-300'>
                    <img src={flag} alt="arrow-down" />
                </button>
            </div>
        </div>
    )
}