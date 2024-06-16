/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

import tr_icon from '/public/images/tr.png'

export default function LocaleSwitcher() {
    
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        return (
          <div key={locale} >
            <Link href={redirectedPathName(locale)}>
              { locale === "en" ? 
              <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/uk_f1fc1c0fb6.png' alt='' width={'30px'} height={'auto'} /> : 
                locale === "tr" ? <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/tr_3e91ac3cc2.png' alt='' width={'30px'} height={'auto'} /> : 
              <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/sa_2cd3416985.png' alt='' width={'30px'} height={'auto'} /> }
            </Link>
          </div>
        )
      })}
    </div>
  )
}
