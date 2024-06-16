import { Locale } from "@/i18n.config";

export default function Page(
    { params: { lang }} :
    { params: { lang: Locale}}
) {

    return (
    <div className=" absolute z-50">
        <iframe src="https://online.publuu.com/547980/1232262/page/1?embed" className=" w-screen h-screen"  allow="clipboard-write" ></iframe>
    </div>
    )
}