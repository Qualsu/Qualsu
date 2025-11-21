import Archive from './_components/archive'
import Develop from './_components/develop'
import Footer from './_components/footer'
import Heading from './_components/heading'
import Navbar from './_components/navbar'
import Project from './_components/project'
import QualID from './_components/qualid'

export default function App() {
  return (
    <>
      <Navbar/>
      <Heading/>
      <hr className='border-white mx-10 rounded-2xl'/>
      <QualID/>
      <Project/>
      <Develop/>
      <Archive/>
      <Footer/>
    </>
  )
}