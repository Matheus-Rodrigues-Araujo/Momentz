import Sidebar from '../components/sidebar'
import { Aside } from './aside'

export default function NextLayout({ children }) {
  return (
    <div>
      <main className='min-h-screen' style={{backgroundColor: '#0e0d0e'}} >
        <Sidebar/>
        <div className='min-h-screen mt-8 flex justify-center'>
          <div className='flex justify-center gap-10 ml-20' >
            {children}
            <Aside/>
          </div>
        </div>
      </main>
    </div>
  )
}