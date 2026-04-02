import Archive from './_components/archive'
import Develop from './_components/develop'
import Footer from './_components/footer'
import Heading from './_components/heading'
import Navbar from './_components/navbar'
import Project from './_components/project'
import QualID from './_components/qualid'

export default function App() {
  return (
    <div className='relative isolate min-h-screen text-white'>
      <Navbar/>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(164,93,255,0.16),transparent_55%)]'/>
      <Heading/>
      <div className='mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
        <hr className='border-white/10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.04)]'/>
      </div>
      <QualID/>
      <Project/>
      <Develop/>
      <Archive/>
      <Footer/>
    </div>
  )
}