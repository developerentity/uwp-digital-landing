export default function Header() {

    return (
        <header className="border-b flex items-center justify-between h-14">
            <a className="text-white uppercase text-xl" href="#">
                UWP Digital
            </a>
            <nav className="hidden md:flex items-center">
                <ul className="inline-flex items-center uppercase gap-8">
                    <li><a className="header-link" href="#">Cases</a></li>
                    <li><a className="header-link" href="#">Services</a></li>
                    <li><a className="header-link" href="#">About us</a></li>
                    <li><a className="header-link" href="#">Blog</a></li>
                    <li><a className="header-link" href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="flex">
                <button className="flex py-2 px-5 uppercase rounded-full bg-[#FF304D]">
                    Lets talk
                    <div className="ps-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" data-slot="icon" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </button>
                <button className="flex items-center ms-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon" className="w-5 h-5">
                        <path d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.449 6.449 0 0 1 4.271.572 7.948 7.948 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31V2.75Z" />
                    </svg>
                    <div className="ms-1">US</div>
                </button>
            </div>
        </header>
    )
}