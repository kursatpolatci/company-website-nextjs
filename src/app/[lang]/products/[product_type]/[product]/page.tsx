import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import ProductContent from "@/components/ProductContent";
import Footer from "@/components/Footer";

export default function Page (
    { params: { lang, product } } :
    { params: { lang: Locale, product: string } }
) {

  return (
    <div>
        <HeaderBackground text={lang === "tr" ? "" : "Products"}/>
        <ProductContent lang={lang} product={product}/>
        <Footer lang={lang}/>
    </div>
  );
}
