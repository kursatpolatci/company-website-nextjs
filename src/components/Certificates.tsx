/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import BackgroundEffects from "./BackgroundEffects";

export default function Certificates({ lang }: { lang: Locale }) {
  return (
    <div>
      <BackgroundEffects />
      <section className="blog relative">
        <div className="z-20 grid grid-cols-3 gap-x-48 gap-y-24 relative py-12 px-36">
          <div className="relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300">
            {" "}
            <Link href="https://innovative-confidence-c13676fd50.media.strapiapp.com/wcs_07f22e04ad.pdf">
              {" "}
              <img
                src="https://innovative-confidence-c13676fd50.media.strapiapp.com/wcs_5491e97e79.jpg"
                alt=""
                width={"auto"}
                height={"auto"}
              />
            </Link>{" "}
          </div>
          <div className="relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300">
            {" "}
            <Link href="https://innovative-confidence-c13676fd50.media.strapiapp.com/bv2_13b42bc55c.pdf">
              {" "}
              <img
                src="https://innovative-confidence-c13676fd50.media.strapiapp.com/bv2_eb599a2237.jpg"
                alt=""
                width={"auto"}
                height={"auto"}
              />
            </Link>{" "}
          </div>
          <div className="relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300">
            {" "}
            <Link href="https://innovative-confidence-c13676fd50.media.strapiapp.com/bv1_a03f2a52a6.pdf">
              {" "}
              <img
                src="https://innovative-confidence-c13676fd50.media.strapiapp.com/bv1_934c6263d7.jpg"
                alt=""
                width={"auto"}
                height={"auto"}
              />
            </Link>{" "}
          </div>
          <div className="relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300">
            {" "}
            <Link href="https://innovative-confidence-c13676fd50.media.strapiapp.com/turkloydu_f02ff14865.pdf">
              {" "}
              <img
                src="https://innovative-confidence-c13676fd50.media.strapiapp.com/turkloydu_8f2c9edb14.jpg"
                alt=""
                width={"auto"}
                height={"auto"}
              />
            </Link>{" "}
          </div>
          <div className="relative before:bg-white before:-z-10 border-gray-200 border before:hover:border-gray-400 before:border before:border-gray-200 before:absolute before:-inset-2 before:hover:duration-300 hover:border-gray-500 hover:cursor-pointer duration-300">
            {" "}
            <Link href="https://innovative-confidence-c13676fd50.media.strapiapp.com/rina_b7c9020bb0.pdf">
              {" "}
              <img
                src="https://innovative-confidence-c13676fd50.media.strapiapp.com/rina_e9415eb48d.jpg"
                alt=""
                width={"auto"}
                height={"auto"}
              />
            </Link>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
