import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto" src="/DIGITAL.jpg" alt="" width="250" height="300"/>
       <h2>Rojhan Mazari</h2>
      <div className="text-6xl text-ellipsis font-semibold text-blue-800">Mantech International
       </div>
       <div className='flex text-green-600'> Powered by Riaz Arrain</div>
    </main>
  )
}
