export default async function LanxessPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-red-600 pb-4">
                LANXESS
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'LANXESS는 독일에 본사를 둔 글로벌 특수 화학 기업으로, 합성 고무, 첨가제, 특수 화학제품 등을 생산하는 업계 선도 기업입니다.'
                            : 'LANXESS is a global specialty chemicals company headquartered in Germany, an industry leader in producing synthetic rubber, additives, and specialty chemical products.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '합성 고무' : 'Synthetic Rubber'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? 'EPDM, NBR, SBR' : 'EPDM, NBR, SBR'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '고무 화학품' : 'Rubber Chemicals'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '가황제, 가황촉진제' : 'Vulcanizing agents, accelerators'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '무기 안료' : 'Inorganic Pigments'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '산화철 안료' : 'Iron oxide pigments'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '플라스틱 첨가제' : 'Plastic Additives'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '난연제, 안정제' : 'Flame retardants, stabilizers'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-red-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '글로벌 네트워크' : 'Global Network'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '전 세계 30개 이상 국가에 진출' : 'Present in over 30 countries worldwide'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '60개 이상의 생산 시설' : 'Over 60 production facilities'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '14,000명 이상의 직원' : 'Over 14,000 employees'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '지속가능성 중심 경영' : 'Sustainability-focused management'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                            {isKorean ? '타이어' : 'Tire'}
                        </span>
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                            {isKorean ? '자동차' : 'Automotive'}
                        </span>
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                            {isKorean ? '건축' : 'Construction'}
                        </span>
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                            {isKorean ? '코팅' : 'Coatings'}
                        </span>
                        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
                            {isKorean ? '플라스틱' : 'Plastics'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}