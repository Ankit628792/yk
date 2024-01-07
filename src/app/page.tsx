"use client"
import { Poppins, Red_Hat_Display } from 'next/font/google'

import Profile from '@/assets/profile.png'
import Dots from '@/assets/dots.svg'
import FinderPrint from '@/assets/finger-print.png'
import Wings from '@/assets/wings.png'
// @ts-ignore 
import Slide from 'react-reveal/Slide'
// @ts-ignore 
import Flip from 'react-reveal/Flip'
// @ts-ignore 
import Pulse from 'react-reveal/Pulse'
import JumbleWord from '@/app/_lib/JumbleWord'
import { useEffect, useRef, useState } from 'react'
import { data, openLink } from '@/app/_lib/data'


const redHat = Red_Hat_Display({
  weight: '700',
  subsets: ['latin']
})
const poppins = Poppins({
  weight: '100',
  subsets: ['devanagari']
})
const redHat2 = Red_Hat_Display({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false)
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const { about, work, contact } = data

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleDivEnter = () => {
    setHovered(true)
  };

  const handleDivLeave = () => {
    setHovered(false)
  };

  return (
    <>
      <div className={' flex flex-col items-center text-black justify-center custom-cursor ' + (hovered ? 'hover' : '')}
        style={{ left: `${position.x - (hovered ? 75 : 20)}px`, top: `${position.y - (hovered ? 75 : 20)}px` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        <p className='text-3xl text-black font-light'>View</p>
      </div>
      <div className='absolute top-0 left-0 right-0 w-full'>
        <div className="w-full max-w-7xl mx-auto rounded-b-3xl bg-gray-600 bg-opacity-30 p-5 z-10 flex items-center justify-end relative">
          {
            active
              ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white cursor-pointer z-20" onClick={() => setActive(!active)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white cursor-pointer z-20" onClick={() => setActive(!active)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          }
          {active && <Flip bottom cascade>
            <div className={'w-full max-w-sm absolute top-0 right-0 bg-gray-500 bg-opacity-30 text-5xl p-5 lg:p-10 flex flex-col gap-5 lg:gap-7 transition-all duration-500 ' + (active ? 'opacity-100 z-10 h-auto' : 'z-0 h-0 opacity-0')}>
              <h2 style={redHat.style} className='!opacity-0 select-none'>Work</h2>
              <h2 style={redHat.style} onClick={() => { setActive(false); (workRef?.current as any)?.scrollIntoView({ behavior: 'smooth' }) }} className='cursor-pointer text-white'>Work</h2>
              <h2 style={redHat.style} onClick={() => { setActive(false); (aboutRef?.current as any)?.scrollIntoView({ behavior: 'smooth' }) }} className='cursor-pointer text-white'>About</h2>
              <h2 style={redHat.style} onClick={() => { setActive(false); (contactRef?.current as any)?.scrollIntoView({ behavior: 'smooth' }) }} className='cursor-pointer text-white'>Contact</h2>
            </div>
          </Flip>}
        </div>
      </div>
      <section className='w-full min-h-screen bg-[#000] text-white p-5 flex flex-col gap-y-20 sm:gap-y-24 md:gap-y-10'>
        <div className='min-h-screen w-full max-w-7xl mx-auto place-items-center grid grid-cols-4 gap-20 md:gap-5 pt-20 md:py-10'>
          <div className='col-span-4 md:col-span-2'>
            <Slide>
              <h1 style={redHat.style} className='text-center md:text-left text-6xl sm:text-8xl lg:text-9xl 2xl:text-[9rem]'><JumbleWord word={'Hello!'} /> <br /><JumbleWord word={"I'm Yash"} /></h1>
            </Slide>
            <Slide>
              <p style={poppins.style} className='text-center md:text-left text-3xl sm:text-4xl lg:text-5xl mt-3 md:mt-6'>
                <JumbleWord word={'A Logo designer'} /> <br />
                <JumbleWord word={'based in India'} />
              </p>
            </Slide>
          </div>
          <Pulse>
            <div className='col-span-4 md:col-span-2 relative'>
              <img src={Dots.src} className='w-[370px] h-96 sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] object-cover' alt="" />
              <img src={Profile.src} className='w-[300px] h-80 sm:h-96 sm:w-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain' alt="" />
            </div>
          </Pulse>
        </div>

        <div ref={workRef} className='w-full min-h-[80vh] md:min-h-screen flex flex-col'>
          <div className='w-full max-w-7xl mx-auto'>
            <h1 style={redHat.style} className='text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4'><JumbleWord word={'Work'} /></h1>
            <div className='h-0.5 w-full bg-white'></div>
          </div>
          <Slide right cascade>
            <div className='flex-grow flex items-center scroll-hidden w-full overflow-x-auto gap-10 2xl:px-32'>
              {
                work.map((item, i) => <div key={i}
                  onMouseEnter={handleDivEnter}
                  onMouseLeave={handleDivLeave}
                  onClick={() => openLink(item.link)}
                  className='min-w-[20rem] sm:min-w-[22rem] lg:min-w-[32rem] max-w-sm sm:max-w-md lg:max-w-lg flex flex-col items-center justify-center text-center border-4 border-gray-500 rounded-[40px] px-5 py-10 cursor-pointer relative overflow-hidden group'>
                  <div className='bg-black bg-opacity-60 backdrop-blur-sm absolute inset-0 z-20 transition-all duration-500 ease-in-out hidden place-items-center text-black lg:group-hover:flex'>
                  </div>
                  <Slide>
                    <h1 style={redHat.style} className=' text-4xl md:text-5xl lg:text-7xl min-w-max text-[FAF9F6]'><JumbleWord word={item.title} /></h1>
                    <p style={poppins.style} className=' text-2xl md:text-3xl lg:text-4xl my-4 leading-normal'><JumbleWord word={item.description} /></p>
                  </Slide>
                  <Slide>
                    <div className='w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative mx-auto mt-6'>
                      <img src={item.image} className='w-full h-full rounded-3xl object-contain absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl' alt="" />
                      <img src={item.image} className='w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-[40px] object-contain z-10 relative' alt="" />
                    </div>
                  </Slide>
                </div>)
              }
            </div>
          </Slide>
        </div>

        <div ref={aboutRef} className='w-full max-w-7xl mx-auto min-h-screen flex flex-col'>
          <h1 style={redHat.style} className='text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4'><JumbleWord word={"About"} /></h1>
          <div className='h-0.5 w-full bg-white'></div>
          <div className='grid grid-cols-12 items-center flex-grow'>
            <Pulse>
              <div className='col-span-12 md:col-span-5 grid place-items-center'>
                <img src={FinderPrint.src} className='w-40 h-80 object-contain' alt="" />
              </div>
            </Pulse>
            <div className='col-span-12 md:col-span-7'>
              <Slide cascade>
                <div className='max-w-2xl'>
                  <p style={redHat2.style} className='text-3xl lg:text-5xl'><JumbleWord word={about.title} /></p>
                  {
                    about.description.map((desc, i) => <p key={i} style={poppins.style} className='text-2xl lg:text-4xl my-6 leading-normal'><JumbleWord word={desc} /></p>)
                  }
                </div>
              </Slide>
            </div>
          </div>
        </div>
        <div ref={contactRef} className='w-full max-w-7xl mx-auto min-h-screen flex flex-col'>
          <h1 style={redHat.style} className='text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4'><JumbleWord word={"Contact"} /></h1>
          <div className='h-0.5 w-full bg-white'></div>
          <div className='grid grid-cols-12 items-center flex-grow'>
            <Pulse>
              <div className='col-span-12 md:col-span-5 grid place-items-center'>
                <img src={Wings.src} className='w-80 md:w-full' alt="" />
              </div>
            </Pulse>
            <div className='col-span-12 md:col-span-7'>
              <Slide cascade>
                <div className='max-w-2xl'>
                  <p style={redHat2.style} className='text-3xl lg:text-5xl'><JumbleWord word={contact.title} /></p>
                  <p style={poppins.style} className='text-2xl lg:text-4xl my-6 leading-normal'><JumbleWord word={contact.description} /></p>
                  <div className='flex items-center gap-1 my-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p style={poppins.style} className='text-xl lg:text-3xl text-blue-600'><a href={`mailto:${contact.email}`}><JumbleWord word={contact.email} /></a></p>
                  </div>
                  <p style={poppins.style} className='text-xl lg:text-3xl my-10 cursor-pointer' onClick={() => openLink(contact.instagramURL)}><JumbleWord word={`Instagram`} /></p>
                </div>
              </Slide>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
