import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Commercial from './components/Commercial'
import Vlog from './components/Vlog'
import MusicVideo from './components/MusicVideo'
import Flim from './components/Flim'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-10 px-10">
      <HeroSection />

      <div>
        <h1 className='text-3xl mb-5'>Commercial</h1>
        <div className='flex overflow-scroll gap-4'>
          <Commercial />
        </div>
      </div>

      <div>
        <h1 className='text-3xl mb-5'>Vlog</h1>
        <div className='flex overflow-scroll gap-4'>
          <Vlog />
        </div>
      </div>

      <div>
        <h1 className='text-3xl mb-5'>Music videos</h1>
        <div className='flex overflow-scroll gap-4'>
        <Vlog />
        </div>
      </div>

      <div>
        <h1 className='text-3xl mb-5'>Flim</h1>
        <div className='flex overflow-scroll gap-4'>
        <Vlog />
        </div>
      </div>

    </main>
  )
}
