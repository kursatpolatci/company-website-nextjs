import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div>
      <HeaderBackground text={lang === "tr" ? "Hakkımızda" : "About us"}/>
      <About lang={lang}/>
      <Footer lang={lang} />
    </div>

    )
}