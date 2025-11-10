export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function RubberPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-green-600 pb-4">
                Rubber
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? '다양한 종류의 산업용 고무 소재를 공급합니다. 각 고무는 특정 용도에 최적화된 물성을 가지고 있습니다.'
                            : 'We supply various types of industrial rubber materials. Each rubber has properties optimized for specific applications.'}
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '취급 제품' : 'Product Range'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">NBR (Nitrile Rubber)</strong>
                                <p className="text-gray-600 text-sm">
                                {isKorean ? '내유성이 우수한 고무' : 'Excellent oil resistance'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">EPDM (Ethylene Propylene Diene Monomer)</strong>
                                <p className="text-gray-600 text-sm">
                                {isKorean ? '내후성 및 내열성이 뛰어남' : 'Superior weather and heat resistance'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">SBR (Styrene Butadiene Rubber)</strong>
                                <p className="text-gray-600 text-sm">
                                {isKorean ? '범용 고무 소재' : 'General purpose rubber'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">Silicone Rubber</strong>
                                <p className="text-gray-600 text-sm">
                                {isKorean ? '광범위한 온도 범위에서 사용 가능' : 'Usable in wide temperature range'}
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-gray-800 mb-2">
                            {isKorean ? '자동차' : 'Automotive'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {isKorean ? '타이어, 호스, 씰' : 'Tires, hoses, seals'}
                        </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-gray-800 mb-2">
                            {isKorean ? '건설' : 'Construction'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {isKorean ? '방수재, 단열재' : 'Waterproofing, insulation'}
                        </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold text-gray-800 mb-2">
                            {isKorean ? '전자' : 'Electronics'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {isKorean ? '절연재, 개스킷' : 'Insulation, gaskets'}
                        </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}