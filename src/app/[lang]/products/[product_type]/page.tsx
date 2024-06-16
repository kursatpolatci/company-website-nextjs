import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Page (
    { params: { lang, product_type } } :
    { params: { lang: Locale, product_type: string } }
) {
  return (
    <div>
        <HeaderBackground text={lang === "tr" ? "" : "Products"}/>
        <Products lang={lang} product_type={product_type}/>
        <Footer lang={lang}/>
    </div>
  );
}
