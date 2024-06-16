/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";

import BackgroundEffects from "./BackgroundEffects";

import Link from "next/link";

import '@/styles/Products.css'


export default async function ProductTypes({ lang }: { lang: Locale }) {

  const res = await fetch(`http://reliable-nurture-8d69d86d25.strapiapp.com/api/product-types?populate=*&locale=${lang}&sort=publishedAt:asc`);

  const json = await res.json();

  const product_types = json.data;

  return (
    <div className="relative py-16 w-full h-full">
    
      <BackgroundEffects />
        {/* Product Types */}
        <div className="card">
        {product_types.map((item : any, id: number)=> (
          <div key={item.id} className="card-context">
              <img src={`${item.attributes.Image.data.attributes.url}`} alt="image" />
              <div className="details">
                  <h2>{item.attributes.Title}</h2>
                  <div className="more">
                      <button  className="read-more"><Link href={`/${lang}/products/${item.id}`}>{lang === "tr" ? "Daha Fazlası" : "Review"} <span> {lang === "tr" ? "İçin" : "More"} </span></Link></button>
                  </div>
              </div>
          </div>
        ))}
        </div>
          
    </div>
  );
}


