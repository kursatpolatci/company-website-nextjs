'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import '@/styles/Slider.css';

import { Locale } from "@/i18n.config";

interface Dictionary {
    h1: string;
    d1: string;
    b1: string;
    h2: string;
    d2: string;
    b2: string;
    h3: string;
    d3: string;
    b3: string;
}

export default function Slider({ lang }: { lang: Locale }) {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const handleSlideChange = (index: number) => {
        setActiveSlide(index);
    };

    const [dictionary, setDictionary] = useState<Dictionary>({
        h1: '',
        d1: '',
        b1: '',
        h2: '',
        d2: '',
        b2: '',
        h3: '',
        d3: '',
        b3: ''
    });

    useEffect(() => {
        const newDictionary = lang === "tr" ? {
            h1: "İhtİyacInIza özel çözümler Erİşİm Kablo farkIyla",
            d1: "Yenilikçi yaklaşımlarla, müşteri memnuniyetini esas alarak ve etik değerlere sıkı sıkıya bağlı kalarak, Erişim Kablo sektördeki en son teknolojileri takip eder ve ürünlerinin kalitesini sürekli olarak iyileştirir.",
            b1: "Hakkımızda",
            h2: "İnovasyon ve güvenlİk Erİşİm Kablo'nun İmzası",
            d2: "Müşterilerimizin benzersiz ihtiyaçlarını karşılamak adına özelleştirilmiş çözümler üreten Erişim Kablo, sektördeki öncü rolünü sürdürerek her zaman bir adım önde olmayı hedefler.",
            b2: "Ürünler",
            h3: "GÜvenle bağlanın, yenİlİğİn adresİ: Erİşİm Kablo",
            d3: "Erişim Kablo, kalitede sınırları zorlayan bir anlayışla her bir ürününde mükemmelliği hedefler ve sağlam bir tedarik zinciriyle güçlendirir.",
            b3: "İletişim"
        } :  lang === "en" ? {
            h1: "SPECIAL SOLUTIONS FOR YOUR NEEDS With the Access Cable difference",
            d1: "Access Kablo aims for excellence in each of its products with an understanding that pushes the limits in quality and strengthens it with a solid supply chain.",
            b1: "About Us",
            h2: "A journey with no limits in quality",
            d2: "Access Cable produces special solutions by taking into account the needs of our customers and makes a difference in the sector.",
            b2: "Products",
            h3: "Connect safely, the address of innovation: Erişİm Kablo",
            d3: "Each cable touched with advanced technology and innovative approaches symbolizes the leadership of Çözüm Kablo.",
            b3: "Contact"
        } : {
            "h1": "حلول خاصة لاحتياجاتك مع فرق إريشيم كابل",
            "d1": "تهدف إريشيم كابل إلى تحقيق التميز في كل منتج من منتجاتها بفهم يدفع حدود الجودة ويعززه بسلسلة توريد قوية.",
            "b1": "معلومات عنا",
            "h2": "رحلة بلا حدود في الجودة",
            "d2": "تنتج إريشيم كابل حلولًا خاصة تأخذ في الاعتبار احتياجات عملائنا وتحدث فرقًا في القطاع.",
            "b2": "منتجات",
            "h3": "اتصل بأمان، عنوان الابتكار: إريشيم كابل",
            "d3": "كل كابل يتم لمسه بتكنولوجيا متقدمة ونهج مبتكر يرمز إلى قيادة إريشيم كابل.",
            "b3": "اتصل"
          };
          
        setDictionary(newDictionary);
    }, [lang]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="home">
                <video preload="auto" className={`video-slide ${activeSlide === 0 ? 'active' : ''}`} src="https://innovative-confidence-c13676fd50.media.strapiapp.com/video1_e02032e322.mp4" autoPlay muted loop></video>
                <video preload="auto" className={`video-slide ${activeSlide === 1 ? 'active' : ''}`} src="https://innovative-confidence-c13676fd50.media.strapiapp.com/video2_c2dd5f0219.mp4" autoPlay muted loop></video>
                <video preload="auto" className={`video-slide ${activeSlide === 2 ? 'active' : ''}`} src="https://innovative-confidence-c13676fd50.media.strapiapp.com/video3_77541267fb.mp4" autoPlay muted loop></video>

                    <div className={`content ${activeSlide === 0 ? 'active' : ''}`}>
                        <h1 className="title">{dictionary.h1}</h1>
                        <p>{dictionary.d1}</p>
                        {/* <Link href={`/${lang}/about`}>{dictionary.b1}</Link> */}
                    </div>
                    <div className={`content ${activeSlide === 1 ? 'active' : ''}`}>
                        <h1 className="title">{dictionary.h2}</h1>
                        <p>{dictionary.d2}</p>
                        {/* <Link href={`/${lang}/products`}>{dictionary.b2}</Link> */}
                    </div>
                    <div className={`content ${activeSlide === 2 ? 'active' : ''}`}>
                        <h1 className="title">{dictionary.h3}</h1>
                        <p>{dictionary.d3}</p>
                        {/* <Link href={`/${lang}/catalog`}>{dictionary.b3}</Link> */}
                    </div>


                <div className="media-icons">
                    <a href="https://www.instagram.com/erisimkablo/"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/eri%C5%9Fim-kablo-a-%C5%9F-824864302/"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/profile.php?id=100068103998424"><FaFacebookF /></a>
                </div>


                <div className="slider-navigation">
                    <div className={`nav-btn ${activeSlide === 0 ? 'active' : ''}`} onClick={() => handleSlideChange(0)}></div>
                    <div className={`nav-btn ${activeSlide === 1 ? 'active' : ''}`} onClick={() => handleSlideChange(1)}></div>
                    <div className={`nav-btn ${activeSlide === 2 ? 'active' : ''}`} onClick={() => handleSlideChange(2)}></div>
                </div>
            </section>
        </>
    );
}
