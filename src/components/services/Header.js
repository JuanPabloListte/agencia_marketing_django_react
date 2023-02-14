import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

function Header(){
    
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-16 sm:text-7xl">
                  Sofware Development Servides
                </h1>
                <p className="mt-6 text-2xl leading-8 max-w-3xl text-black">
                  We love to shake established thought-patterns and create what has never been attempted before. We take seeds and grow jungles
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-39rem)] lg:left-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://yt3.googleusercontent.com/ytc/AMLnZu-O4Q_26PffQ77sAH4pU2KeBdmamg6pjx7lBv9z=s900-c-k-c0x00ffffff-no-rj" className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header