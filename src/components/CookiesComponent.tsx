



export default function CookiesComponent() {

    return (
        <div className="block">
            <div className='inline-block rounded-full bg-[#212121] py-4 px-4 uppercase'>
                <div className="flex">
                    <div className='mx-4 flex flex-col justify-center items-start'>
                        <div>This website uses cookies.</div>
                        <button className='uppercase'>Learn more</button>
                    </div>
                    <div>
                        <button className='rounded-full bg-[#323232] py-3 px-8 ms-4 uppercase'>Accept</button>
                    </div>
                </div>
            </div>
        </ div>
    )
}