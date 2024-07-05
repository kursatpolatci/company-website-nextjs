/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import LocaleSwitcher from "./LocaleSwitcher";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import '@/styles/Navbar.css'

export default async function Navbar ( { lang } : { lang : Locale }) {

  const { navigation, products} = await getDictionary(lang);
  return (
    <header>
    <Link href="/" className="logo"><img src="https://innovative-confidence-c13676fd50.media.strapiapp.com/erisim_logo_f9cce6c0d5.png" alt="" width={'350px'} height={"auto"}></img></Link>

    <input type="checkbox" id="menu-bar"></input>
    <label htmlFor="menu-bar">Menu</label>
    <nav className="navbar">
      <ul>
        <li><Link className="font-normal navigation-items" href={`/${lang}`}>{navigation.home}</Link></li>
        <li><Link className="font-normal navigation-items" href={`/${lang}/about`}>{navigation.institutional}</Link>
        <ul>
            <li><div><Link className="font-normal navigation-items" href={`/${lang}/about`}>{navigation.about}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href={`/${lang}/certificates`}>{navigation.certificates}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href={`/${lang}/technical`}>{navigation.technical}</Link></div></li>
        </ul>
        </li>
        <li><Link className="font-normal navigation-items" href={`/${lang}/products`}>{navigation.products}</Link>
        <ul>
            <li><div><Link className="font-normal navigation-items" href="/product/gemi-ve-yat-kablolari">{products["p-1"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/pur-kablolari">{products["p-2"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/ozel-kablolar">{products["p-3"]} </Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/solar-kablolar">{products["p-4"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/coaxial-kablolar">{products["p-5"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/enstruman-kablolari">{products["p-6"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/goruntu-ve-ses-kablolari"> {products["p-7"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/halogen-free-kablolari">{products["p-8"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/kumanda-kablolari">{products["p-9"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/oto-tasit-kablolari">{products["p-10"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/sinyal-ve-kontrol-kablolari"> {products["p-11"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/veri-iletisim-kablolari">{products["p-12"]}</Link></div></li>
            <li><div><Link className="font-normal navigation-items" href="/product/yangin-alarm-ve-haberlesme-kablolari">{products["p-13"]}</Link></div></li>
          </ul>
        </li>
        <li><Link className="font-normal navigation-items" href="/catalog">{navigation.catalog}</Link></li>
        <li><Link className="font-normal navigation-items" href="/news">{navigation.news}</Link></li>
        <li><Link className="font-normal navigation-items" href="/contact">{navigation.contact}</Link></li>
      </ul>
    </nav>
    <LocaleSwitcher />
    </header>
  );
}
