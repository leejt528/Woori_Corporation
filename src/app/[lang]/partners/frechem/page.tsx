export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function FreChemPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-orange-600 pb-4">
                FreChem
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'FreChem은 프리미엄 화학 제품 제조 분야의 혁신 기업으로, 고순도 화학 소재와 특수 첨가제를 전문으로 생산하고 있습니다.'
                            : 'FreChem is an innovative company in premium chemical product manufacturing, specializing in high-purity chemical materials and specialty additives.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '고순도 화학품' : 'High-Purity Chemicals'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '반도체/디스플레이용' : 'For semiconductor/display'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '기능성 첨가제' : 'Functional Additives'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '성능 향상 첨가제' : 'Performance enhancement additives'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '촉매' : 'Catalysts'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '중합 촉매' : 'Polymerization catalysts'}
                            </p>
                        </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '용제' : 'Solvents'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '특수 용제' : 'Specialty solvents'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-orange-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '핵심 역량' : 'Core Competencies'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '최첨단 생산 시설' : 'State-of-the-art production facilities'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '엄격한 품질 관리' : 'Strict quality control'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? 'R&D 집중 투자' : 'Focused R&D investment'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '친환경 생산 공정' : 'Eco-friendly production processes'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                            {isKorean ? '반도체' : 'Semiconductor'}
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                            {isKorean ? '디스플레이' : 'Display'}
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                            {isKorean ? '전자재료' : 'Electronic Materials'}
                        </span>
                        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
                            {isKorean ? '정밀화학' : 'Fine Chemicals'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}