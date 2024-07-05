/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";

export default async function NewContent ( 
    { lang, id } : { lang: Locale, id: string}
) {

  const res = await fetch(`http://innovative-confidence-c13676fd50.strapiapp.com/api/news?populate=*&locale=${lang}`);

  const json = await res.json();

  const haber = json.data;

  const filteredId = haber.find((item: { id: number; }) => item.id.toString() === id)

  return (
    
  <div className="py-32 bg-white">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-24">
          <div className="md:4/12 lg:w-6/12">
            <img src={`${filteredId.attributes.Image.data.attributes.url}`} alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:8/12 lg:w-8/12">
            <span className=" text-blue-800 text-xl">{filteredId.attributes.Date} </span>   <br /> 
            <h2 className="text-2xl text-gray-900 font-bold md:text-5xl">{filteredId.attributes.Title}</h2>
            <p className="mt-6 text-gray-600 text-xl">{filteredId.attributes.Description}</p>
          </div>
        </div>
    </div>
  </div>
  
);
}
