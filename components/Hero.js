import Image from "next/image"
import profileimg from '@/assets/images/profile-crop.png'

export default function Hero({title, titlesubtext, text, button}) {
    return (
    <section className="hero spacer container mx-auto">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <Image  className="home-img" src={profileimg} alt="Image of Jaimie" width={0} height={0} />
            <div className="w-1/2">
                <h1 className="block text-white text-4xl pb-5">
                {title} <span className="title-span text-7xl">{titlesubtext}</span>
                </h1>
                <p className="text-lg text-white pb-10">{text}</p>
                <a className="btn-main" href="#">
                    {button}
                </a>
            </div>
        </div>
    </section>
    )
}