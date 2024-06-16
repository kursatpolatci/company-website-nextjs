import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Page (
    { params: { lang }} :
    { params: { lang: Locale}}
) {
  return (
    <div>
      <HeaderBackground text={lang === "tr" ? "Haberler" : "News"}/>
      <News lang={lang}/>
      <Footer lang={lang}/>
    </div>
  );
}