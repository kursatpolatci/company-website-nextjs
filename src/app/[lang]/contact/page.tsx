import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div>
      <HeaderBackground text={lang === "tr" ? "İletişim" : "Contact"}/>
      <Contact lang={lang}/>
      <Footer lang={lang} />
    </div>

    )
}