import Link from 'next/link'

export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    const products = [
        {
            name: 'Fluoro Elastomer & Resin',
            description: isKorean ? '고성능 불소 고무 및 수지 제품' : 'High-performance fluoro elastomer and resin products',
            href: `/${lang}/products/fluoro_elastomer_resin`,
            color: 'from-blue-500 to-blue-700'
        },
        {
            name: 'Rubber',
            description: isKorean ? '다양한 산업용 고무 소재' : 'Various industrial rubber materials',
            href: `/${lang}/products/rubber`,
            color: 'from-green-500 to-green-700'
        },
        {
            name: 'Urethane',
            description: isKorean ? '고품질 우레탄 소재' : 'High-quality urethane materials',
            href: `/${lang}/products/urethane`,
            color: 'from-purple-500 to-purple-700'
        },
        {
            name: 'Functional Filler & Pigment',
            description: isKorean ? '기능성 충진제 및 안료' : 'Functional fillers and pigments',
            href: `/${lang}/products/functional_filler_pigment`,
            color: 'from-orange-500 to-orange-700'
        },
        {
            name: 'Mold Releases & Internal Lubricants',
            description: isKorean ? '이형제 및 내부 윤활제' : 'Mold release agents and internal lubricants',
            href: `/${lang}/products/mold_releases_internal_lubricants`,
            color: 'from-red-500 to-red-700'
        },
        {
            name: 'Flame Retardants',
            description: isKorean ? '난연제' : 'Flame retardant materials',
            href: `/${lang}/products/flame_retardants`,
            color: 'from-yellow-500 to-yellow-700'
        },
        {
            name: 'Other Additives',
            description: isKorean ? '기타 첨가제' : 'Other chemical additives',
            href: `/${lang}/products/other_additives`,
            color: 'from-gray-500 to-gray-700'
        },
    ]

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '제품 소개' : 'Products'}
            </h1>

            <p className="text-lg text-gray-600 mb-12">
                {isKorean 
                    ? '우리코퍼레이션은 다양한 산업 분야에 필요한 고품질 화학 소재를 공급합니다.'
                    : 'Woori Corporation supplies high-quality chemical materials for various industries.'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <Link 
                        key={index}
                        href={product.href}
                        className="group"
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full">
                            <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                                <h2 className="text-xl font-bold">{product.name}</h2>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">{product.description}</p>
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