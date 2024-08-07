/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/i18n.config";

import '@/styles/News.css';

import Link from "next/link";

import BackgroundEffects from "./BackgroundEffects";

export default async function News({ lang }: { lang: Locale }) {

  const res = await fetch(`http://innovative-confidence-c13676fd50.strapiapp.com/api/news?populate=*&sort=publishedAt:asc&locale=${lang}`);

  const json = await res.json();

  const haber = json.data;
  return (
    <div className="blog relative">
      <BackgroundEffects />
      
      <div className="blog-container z-10">
        {haber.map((item: any, index: number) => (
          <div key={index} className="blog-box">
            <div className="blog-img">
            <Link href={`/${lang}/news/${item.id}`}>
                <img src={`${item.attributes.Image.data.attributes.url}`} alt=""/>
              </Link>
            </div>

            <div className="blog-text">
              <span>{item.attributes.Date}</span>
              <Link href={`/${lang}/news/${item.id}`} className="blog-title">{item.attributes.Title}</Link>
              <p>{item.attributes.Description}</p>
              <Link href={`/${lang}/news/${item.id}`}>{lang === "en" ? "Read More" : "Daha Fazla Bilgi"}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
