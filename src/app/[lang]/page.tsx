import Slider from "@/components/Slider";
import { Locale } from "@/i18n.config";

export default function Page(
  { params: { lang } }: 
  { params: { lang: Locale} }) 
  {
  return (
    <div>
      <Slider lang={lang}/>
    </div>
  );
}
