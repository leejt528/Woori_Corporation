export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function UrethanePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-purple-600 pb-4">
                Urethane
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                        ? '우레탄은 우수한 내마모성, 탄성, 인장강도를 가진 고성능 폴리머 소재입니다. 다양한 산업 분야에서 폭넓게 사용되고 있습니다.'
                        : 'Urethane is a high-performance polymer material with excellent abrasion resistance, elasticity, and tensile strength. It is widely used in various industrial fields.'}
                    </p>
                </section>

                <section className="bg-purple-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '주요 특징' : 'Key Features'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '뛰어난 내마모성 및 내구성' : 'Excellent abrasion resistance and durability'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '높은 탄성 및 복원력' : 'High elasticity and resilience'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '우수한 기계적 강도' : 'Superior mechanical strength'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '다양한 경도 선택 가능' : 'Available in various hardness levels'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '제품 종류' : 'Product Types'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '폴리에스터 우레탄' : 'Polyester Urethane'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '내마모성, 내열성 우수' : 'Excellent abrasion and heat resistance'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '폴리에테르 우레탄' : 'Polyether Urethane'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '내가수분해성, 저온 특성 우수' : 'Excellent hydrolysis and low-temp properties'}
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '산업용 롤러' : 'Industrial Rollers'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '인쇄, 제지 산업' : 'Printing, paper industry'}
                            </p>
                        </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '씰 및 개스킷' : 'Seals & Gaskets'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '기계 부품' : 'Mechanical parts'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '코팅재' : 'Coatings'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '바닥재, 방수재' : 'Flooring, waterproofing'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '문의하기' : 'Contact Us'}
                    </h2>
                    <p className="text-gray-700 mb-4">
                        {isKorean 
                        ? '제품에 대한 자세한 정보나 견적이 필요하신 경우 언제든지 연락 주시기 바랍니다.'
                        : 'For more detailed information or quotations about this product, please feel free to contact us.'}
                    </p>
                    <div className="flex gap-4">
                        <span className="text-gray-700"><strong>Tel:</strong> 02-1234-5678</span>
                        <span className="text-gray-700"><strong>Email:</strong> info@woori-corp.com</span>
                    </div>
                </section>
            </div>
        </div>
    )
}