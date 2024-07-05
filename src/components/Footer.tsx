/* eslint-disable @next/next/no-img-element */
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import '@/styles/Footer.css'

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import Link from "next/link";

export default async function Footer ({ lang }: { lang: Locale }) {
    const { footer } = await getDictionary(lang);
  return (
    <footer>
                <div className="footer-r">
                    <div className="footer-des">
                        <img src="https://innovative-confidence-c13676fd50.media.strapiapp.com/erisim_logo_f9cce6c0d5.png" className='logo' width={'700px'} height={'auto'} alt=""/>
                        <p className='location'> {footer.address} </p>
                    </div>
                    <div className="footer-des">
                        <h3>{footer.contact} <div className="underline"><span></span></div></h3>
                        <p className='email-id'>info@erisimkablo.com.tr</p>
                        <h4 className='communication'>F: +90 (212) 549 27 23</h4>
                        <h4 className='communication'>T: +90 (212) 549 27 81</h4>
                    </div>
                    <div className="footer-des">
                        <h3>{footer.links} <div className="underline"><span></span></div></h3>
                        <ul className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-2">
                            <li><Link href="">{footer.navigation.home}</Link></li>
                            <li><Link href="">{footer.navigation.about}</Link></li>
                            <li><Link href="">{footer.navigation.catalog}</Link></li>
                            <li><Link href="">{footer.navigation.contact}</Link></li>
                            <li><Link href="">{footer.navigation.products}</Link></li>
                            <li><Link href="">{footer.navigation.news}</Link></li>
                        </ul>

                    </div>
                    <div className="footer-des">
                        <h3>{footer.social} <div className="underline"><span></span></div></h3>
                        <div className="social-icons">
                            <Link href="#" className='fc'><i><FaFacebookF /></i></Link>
                            <Link href="#" className='wp'><i ><FaWhatsapp /></i></Link>
                            <Link href="#" className='li'><i ><FaLinkedin /></i></Link>
                            <Link href="#" className='in'><i ><FaInstagram /></i></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='copyright'>{footer.rights}</p>
    </footer>
  );
}
