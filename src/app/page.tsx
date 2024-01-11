import CookiesComponent from '@/components/CookiesComponent'
import DialogContainer from '@/components/DialogContainer'
import Header from '@/components/Header'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center  relative  overflow-hidden">

      {/* // background circle */}
      <div className="right-0 transform translate-x-1/2 absolute gradient-circle" />


      <div className=" max-w-screen-xl flex min-h-screen flex-col items-center justify-between text-white ">
        <div className='w-full'>
          <Header />
        </div>

        <section className='w-full max-w-5xl relative'>
          <div className='items-center flex flex-col'>
            <div className='uppercase text-center'>
              <h1 className='text-7xl font-bold'>Your reliable digital marketing partner</h1>
            </div>
            <div className='text-center mt-7 w-1/2'>
              <p>We are a full-service digital marketing agency focused on your success.
                We do not sell ideas. We sell a solution for your business needs.</p>
            </div>
          </div>
          <div className='ms-40'>
            <button className='items-center flex flex-col justify-center bg-[#FF304D] w-40 h-40 rounded-full text-md uppercase font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              Discuss the project
            </button>
          </div>
        </section>
        <footer className='w-full py-10 flex justify-between items-end'>

          <CookiesComponent />
          <div className=''>
            <DialogContainer />
          </div>
        </footer>
      </div>
    </main>
  )
}
