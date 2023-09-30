import Sidebar from '../components/sidebar'

export default function NextLayout({ children }) {
  return (
    <div>
      <main className='min-h-screen grid grid-cols-2' style={{backgroundColor: '#211E1F'}} >
          <Sidebar/>
        <div className='col-span-2 min-h-screen' >
          {children}
        </div>
      </main>
    </div>
  )
}