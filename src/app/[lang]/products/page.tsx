import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import ProductTypes from "@/components/ProductTypes";
import Footer from "@/components/Footer";

export default function Page (
    { params: { lang }} :
    { params: { lang: Locale}}
) {
  
  return (
    <div>
      <HeaderBackground text={lang === "tr" ? "Ürünler" : "Products"}/>
      <ProductTypes lang={lang}/>
      <Footer lang={lang}/>
    </div>
  );
}