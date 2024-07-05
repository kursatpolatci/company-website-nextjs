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
              <img src='https://innovative-confidence-c13676fd50.media.strapiapp.com/uk_bec82cc0d7.png' alt='' width={'30px'} height={'auto'} /> : 
                locale === "tr" ? <img src='https://innovative-confidence-c13676fd50.media.strapiapp.com/tr_f1473c46d7.png' alt='' width={'30px'} height={'auto'} /> : 
              <img src='https://innovative-confidence-c13676fd50.media.strapiapp.com/sa_74b5e36ae5.png' alt='' width={'30px'} height={'auto'} /> }
            </Link>
          </div>
        )
      })}
    </div>
  )
}
