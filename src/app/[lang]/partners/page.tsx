import Link from 'next/link'

export default async function PartnersPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    const partners = [
        {
            name: 'AXEL',
            description: isKorean ? '고성능 플라스틱 첨가제 전문 기업' : 'Specialist in high-performance plastic additives',
            href: `/${lang}/partners/axel`,
            color: 'from-blue-500 to-blue-700'
        },
        {
            name: 'CFI',
            description: isKorean ? '고품질 불소 화합물 제조사' : 'Manufacturer of high-quality fluorine compounds',
            href: `/${lang}/partners/cfi`,
            color: 'from-green-500 to-green-700'
        },
        {
            name: 'FARETAR',
            description: isKorean ? '특수 화학 소재 공급 업체' : 'Supplier of specialty chemical materials',
            href: `/${lang}/partners/faretar`,
            color: 'from-purple-500 to-purple-700'
        },
        {
            name: 'FreChem',
            description: isKorean ? '프리미엄 화학 제품 제조사' : 'Manufacturer of premium chemical products',
            href: `/${lang}/partners/frechem`,
            color: 'from-orange-500 to-orange-700'
        },
        {
            name: 'LANXESS',
            description: isKorean ? '글로벌 특수 화학 기업' : 'Global specialty chemicals company',
            href: `/${lang}/partners/lanxess`,
            color: 'from-red-500 to-red-700'
        },
        {
            name: 'Sundow',
            description: isKorean ? '혁신적인 화학 솔루션 제공 업체' : 'Provider of innovative chemical solutions',
            href: `/${lang}/partners/sundow`,
            color: 'from-yellow-500 to-yellow-700'
        },
    ]

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '협력사' : 'Our Partners'}
            </h1>

            <p className="text-lg text-gray-600 mb-12">
                {isKorean 
                    ? '우리코퍼레이션은 글로벌 선도 기업들과의 긴밀한 파트너십을 통해 최고 품질의 제품을 공급하고 있습니다.'
                    : 'Woori Corporation supplies the highest quality products through close partnerships with global leading companies.'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                    <Link 
                        key={index}
                        href={partner.href}
                        className="group"
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full">
                            <div className={`bg-gradient-to-r ${partner.color} p-8 text-white flex items-center justify-center`}>
                                <h2 className="text-3xl font-bold">{partner.name}</h2>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">{partner.description}</p>
                                <span className="text-blue-600 font-medium group-hover:underline">
                                    {isKorean ? '자세히 보기 →' : 'Learn More →'}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}