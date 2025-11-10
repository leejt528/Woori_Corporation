export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function FluoroPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                Fluoro Elastomer & Resin
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? '불소 고무 및 수지는 뛰어난 내열성, 내화학성, 내후성을 가진 고성능 소재입니다. 자동차, 항공우주, 반도체 등 다양한 산업 분야에서 사용됩니다.'
                            : 'Fluoro elastomers and resins are high-performance materials with excellent heat resistance, chemical resistance, and weather resistance. They are used in various industries such as automotive, aerospace, and semiconductors.'}
                    </p>
                </section>

                <section className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '주요 특징' : 'Key Features'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '우수한 내열성 (-40°C ~ 250°C)' : 'Excellent heat resistance (-40°C ~ 250°C)'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '뛰어난 내화학성' : 'Superior chemical resistance'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '낮은 가스 투과성' : 'Low gas permeability'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '긴 수명 및 내구성' : 'Long service life and durability'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '자동차' : 'Automotive'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '엔진 씰, 호스, 개스킷' : 'Engine seals, hoses, gaskets'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '항공우주' : 'Aerospace'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '연료 시스템 부품' : 'Fuel system components'}
                            </p>
                        </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '반도체' : 'Semiconductor'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '웨이퍼 처리 장비 부품' : 'Wafer processing equipment parts'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '화학 공정' : 'Chemical Processing'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '펌프, 밸브 씰' : 'Pump and valve seals'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
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