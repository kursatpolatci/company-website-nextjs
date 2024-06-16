import { Locale } from "@/i18n.config";

import HeaderBackground from "@/components/HeaderBackground";
import NewContent from "@/components/NewContent";
import Footer from "@/components/Footer";

export default function Page (
    { params: { lang, id }} :
    { params: { lang: Locale, id: string}}
) {
  return (
    <div>
      <HeaderBackground text={lang === "tr" ? "" : ""}/>
      <NewContent lang={lang} id={id}/>
      <Footer lang={lang}/>
    </div>
  );
}