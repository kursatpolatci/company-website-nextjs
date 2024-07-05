import { Locale } from "@/i18n.config";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div className=" absolute z-50 w-screen h-screen flex items-center">
        <iframe src="https://heyzine.com/flip-book/598733d15a.html" className=" w-screen h-screen"  allow="clipboard-write" ></iframe>
    </div>
    )
}