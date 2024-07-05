/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";

import BackgroundEffects from "./BackgroundEffects";

import Link from "next/link";

export default async function ProductContent(
    { lang, product }: { lang: Locale, product: string }) {

  const res = await fetch(`http://innovative-confidence-c13676fd50.strapiapp.com/api/products/${product}?populate=*&locale=${lang}`);

  const json = await res.json();

  const productData = json.data;

  return (
<>
<div className=" flex items-center p-5 lg:p-10 overflow-hidden relative">

    <BackgroundEffects />
    <div className="w-full max-w-6xl rounded  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative border-2 p-2">
                    <img src={`${productData.attributes.Image.data.attributes.url}`} className="w-full relative z-10" alt="" />
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{productData.attributes.Title}</h1>
                    <p className="text-sm">{productData.attributes.Summary[0].children[0].text}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button className=" bg-gray-700 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold">
                            <Link href={"https://erisimkablo.org/MXH_FR_9a29741084.pdf"}> Detail </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  );
}


