/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import BackgroundEffects from "./BackgroundEffects";

export default function Certificates ( { lang } : { lang : Locale }) {
  return (
    <div>
      <BackgroundEffects />
      <section className='blog relative'>
            <div className='z-20 grid grid-cols-3 gap-x-48 gap-y-24 relative py-12 px-36'>
                 <div className='relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300'> <Link  href="https://reliable-nurture-8d69d86d25.media.strapiapp.com/bv1_fe04a2ec9b.pdf"> <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/bv1_92a95950b6.jpg' alt="" width={'auto'} height={'auto'} /></Link> </div> 
                 <div className='relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300'> <Link  href="https://reliable-nurture-8d69d86d25.media.strapiapp.com/bv2_38d6f73d31.pdf"> <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/bv2_b8b3868da9.jpg' alt="" width={'auto'} height={'auto'} /></Link> </div> 
                 <div className='relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300'> <Link  href="https://reliable-nurture-8d69d86d25.media.strapiapp.com/wcs_fd3711ce5e.pdf"> <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/wcs_58f2e50cdb.jpg' alt="" width={'auto'} height={'auto'} /></Link> </div> 
                 <div className='relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300'> <Link  href="https://reliable-nurture-8d69d86d25.media.strapiapp.com/turkloydu_1b95e44537.pdf"> <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/turkloydu_883ced2b05.jpg' alt="" width={'auto'} height={'auto'} /></Link> </div> 
                 <div className='relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300'> <Link  href="https://reliable-nurture-8d69d86d25.media.strapiapp.com/rina_2dd5fe910a.pdf"> <img src='https://reliable-nurture-8d69d86d25.media.strapiapp.com/rina_3807c31797.jpg' alt="" width={'auto'} height={'auto'} /></Link> </div> 
            </div>
        </section>
    </div>
  );
}
