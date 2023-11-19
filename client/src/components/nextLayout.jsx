import Sidebar from '../components/sidebar'

export default function NextLayout({ children }) {
  return (
    <div>
      <main className='min-h-screen grid grid-cols-2' style={{backgroundColor: '#0e0d0e'}} >
          <Sidebar/>
        <div className='col-span-2 min-h-screen mt-8' >
          {children}
        </div>
      </main>
    </div>
  )
}