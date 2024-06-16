import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import Technical from "@/components/Technical";
import Footer from "@/components/Footer";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div>
      <HeaderBackground text={lang === "tr" ? "Teknik Bilgiler" : "Technical Information"}/>
      <Technical lang={lang}/>
      <Footer lang={lang}/>
    </div>

    )
}