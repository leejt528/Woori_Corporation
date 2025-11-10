export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function FaretarPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-purple-600 pb-4">
                FARETAR
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'FARETAR는 특수 화학 소재 공급 분야의 전문 기업으로, 고객 맞춤형 솔루션과 우수한 품질로 시장을 선도하고 있습니다.'
                            : 'FARETAR is a specialist in supplying specialty chemical materials, leading the market with customized solutions and excellent quality.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '특수 수지' : 'Specialty Resins'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '에폭시, 폴리우레탄' : 'Epoxy, polyurethane'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '접착제' : 'Adhesives'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '구조용 접착제' : 'Structural adhesives'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '코팅재' : 'Coatings'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '산업용 코팅' : 'Industrial coatings'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '실런트' : 'Sealants'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '방수/기밀 실런트' : 'Waterproof/airtight sealants'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-purple-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '경쟁력' : 'Competitive Advantages'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '다양한 제품 포트폴리오' : 'Diverse product portfolio'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '신속한 기술 지원' : 'Rapid technical support'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '경쟁력 있는 가격' : 'Competitive pricing'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '안정적인 공급' : 'Stable supply'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                            {isKorean ? '건축' : 'Construction'}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                            {isKorean ? '자동차' : 'Automotive'}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                            {isKorean ? '전자' : 'Electronics'}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                            {isKorean ? '산업 기계' : 'Industrial Machinery'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}