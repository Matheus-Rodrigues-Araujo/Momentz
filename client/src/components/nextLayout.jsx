import Sidebar from '../components/sidebar'
import { Aside } from './aside'

export default function NextLayout({ children }) {
  return (
    <div>
      <main className='min-h-screen ' style={{backgroundColor: '#0e0d0e'}} >
        <Sidebar/>
        <div className='mt-8 flex justify-center gap-5'>
          <div className='flex justify-center gap-10 mb-20 md:ml-20 md:mb-0' >
            {children}
            <Aside/>
          </div>
        </div>
      </main>
    </div>
  )
}