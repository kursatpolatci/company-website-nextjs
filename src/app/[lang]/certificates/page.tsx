import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div>
      <HeaderBackground text={lang === "tr" ? "Sertifikalar" : "Certificates"}/>
      <Certificates lang={lang}/>
      <Footer lang={lang}/>
    </div>

    )
}