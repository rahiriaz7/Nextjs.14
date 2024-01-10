import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
       <figure className="md:flex bg-red-400 rounded-x5 dark:bg-slate-800">
       <Image className="w-24 h-24 md:w-48 md:h-auto mx-auto" src="/man.jpg" alt="" width="384" height="300"/>
  <Image className="w-24 h-24 md:w-48 md:h-auto mx-auto" src="/DIGITAL.jpg" alt="" width="384" height="300"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Rojhan.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-blue-800 dark:text-sky-400">
        Riaz Arrain
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Mantech Pakistan
      </div>
    </figcaption>
  </div>
</figure>
<h3>Mantech Pakistan</h3>
    </div>
  )
}

export default page

