import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <figure className="md:flex bg-green-700 rounded-x5 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto" src="/DIGITAL.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Riaz Arrain Rojhan.”
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
    </div>
  )
}

export default page