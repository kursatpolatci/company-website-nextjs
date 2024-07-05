/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";

import BackgroundEffects from "./BackgroundEffects";

import Link from "next/link";

import '@/styles/Products.css'

export default async function Products(
    { lang, product_type }: { lang: Locale, product_type: string }) {

  const res = await fetch(`http://innovative-confidence-c13676fd50.strapiapp.com/api/products?locale=${lang}&populate=*&sort=publishedAt:asc`);

  const json = await res.json();

  const product_types = json.data;


  const products = product_types.filter((item : any) => 
    item.attributes.ProductType.data.id.toString() === product_type
  )
  return (
    <div className="relative py-16 w-full h-full">
    
      <BackgroundEffects />
        {/* Product Types */}
        <div className="card">
        {products.map((item : any, id: number)=> (
          <div key={item.id} className="card-context">
              <img src={`${item.attributes.Image.data.attributes.url}`} alt="image" />
              <div className="details">
                  <h2>{item.attributes.Title}</h2>
                  <div className="more">
                      <button  className="read-more"><Link href={`/${lang}/products/${product_type}/${item.id}`}>{lang === "tr" ? "Daha Fazlası" : "Review"} <span> {lang === "tr" ? "İçin" : "More"} </span></Link></button>
                  </div>
              </div>
          </div>
        ))}
        </div>
          
    </div>
  );
}


