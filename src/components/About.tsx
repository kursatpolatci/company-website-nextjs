/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import BackgroundEffects from "./BackgroundEffects";

import '@/styles/About.css'

export default async function About ( { lang } : { lang: Locale }) {

    const { about } = await getDictionary(lang);

  return (
    <div className="about-us">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-24 pb-14 sm:pt-32 lg:overflow-visible lg:px-0">
      <BackgroundEffects />

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {about["about-us"]}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {about["erisim"]}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {about["erisim-sort"]}
              </p>
            </div>
          </div>
        </div>
        
        <div className="-ml-12 -mt-12 p-12 lg:relative lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden items-center justify-center flex">
          <div className=" w-[56rem] max-w-none rounded-xl sm:w-[40rem] overflow-hidden ">
            <video
            className="react-player"
            src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/erisim_e02b31a4b0.mp4"
            width="100%"
            height="100%"
            controls={true}/>
            <video />
           
           {/* Referances */}
              <div className="py-16">
                  <div className="container m-auto px-6 space-y-8 md:px-12">
                      <div className="m-auto text-center lg:w-7/12">
                          <h2 className="text-2xl text-gray-700 font-bold md:text-2xl">Your favorite companies are our partners.</h2>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/tse_9dae3e83b4.jpg" className="w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/bv_fb3c918cee.jpg" className=" w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/rohs_651b4ea351.jpg" className=" w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/itl_a848245451.jpg" className=" w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/lr_28956aca9e.jpg" className="w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/rina_ac12ffd4df.jpg" className="w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/wcs_070ab323af.jpg" className="w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/tsek_418a7b0d1c.jpg" className="w-36" alt="" />
                          </div>
                          <div className="p-4">
                              <img src="https://reliable-nurture-8d69d86d25.media.strapiapp.com/ce_fabcbba595.jpg" className="w-36" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
            {/* Referances */}
        
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>{about["p-1"]}</p>
              <p> <br/> {about["p-2"]}</p>
              <p> <br/> {about["p-3"]}</p>
              <p> <br/> {about["p-4"]}</p>
              <p> <br/> {about["p-5"]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visyon ve Misyon*/}
        <div className="w-full mt-16 flex justify-evenly text-center ">
          <div className="max-w-[700px]">
            <h1 className="font-bold text-2xl tracking-tighter text-gray-900">{about.mission} </h1>
            <p className="text-left p-5 text-md leading-8 text-gray-700">{about["mission-p"]}</p>
          </div>

          <div className="vline" />

          <div className="max-w-[700px]">
            <h1 className="font-bold text-2xl tracking-tighter text-gray-900">{about.vision}</h1>
            <p className="text-left p-5 text-md leading-8 text-gray-700">{about["vision-p"]}</p>
          </div>
        </div>
    </div>
    {/* Visyon ve Misyon*/}
    </div>
  );
}
