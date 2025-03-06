import Image from "next/image"

export default function Brands () {
    const brandLogos = [
        { src: '/Brands/Adidas.svg', alt: 'Adidas' },
        { src: '/Brands/Champion.svg', alt: 'Champion' },
        { src: '/Brands/Crocs.svg', alt: 'Crocs' },
        { src: '/Brands/Dr_Martens.svg', alt: 'Dr Martens' },
        { src: '/Brands/Lacoste.svg', alt: 'Lacoste' },
        { src: '/Brands/New_Balance.svg', alt: 'New Balance' },
        { src: '/Brands/Nike.svg', alt: 'Nike' },
        { src: '/Brands/Omega.svg', alt: 'Omega' },
        { src: '/Brands/Ralph_Lauren.svg', alt: 'Ralph Lauren' },
        { src: '/Brands/Supreme.svg', alt: 'Supreme' },
        { src: '/Brands/TheNorthFace.svg', alt: 'The North Face' },
        { src: '/Brands/Tissot.svg', alt: 'Tissot' },
        { src: '/Brands/Tommy_Hilfiger.svg', alt: 'Tommy Hilfiger' },
        { src: '/Brands/Zara.svg', alt: 'Zara' },
    ]

    return (
        <section className="mx-auto px-4 py-6 bg-zinc-200">
            <h2 className="text-4xl font-bold text-center mb-4"><span className="text-slate-600">OUR</span> TRUSTED <span className="text-slate-600">BRANDS</span></h2>
            <div className="flex items-center justify-center gap-8 flex-wrap">
                {brandLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="w-32 h-32 flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={128}
                            height={64}
                            className="object-contain"/>
                    </div>    
                ))}
            </div>
        </section>
    )
};