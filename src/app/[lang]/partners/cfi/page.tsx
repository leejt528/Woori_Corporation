export default async function CfiPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-green-600 pb-4">
                CFI
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'CFI는 고품질 불소 화합물 제조 분야의 글로벌 리더로, 반도체, 의약, 농업 등 다양한 산업에 특수 화학 제품을 공급하고 있습니다.'
                            : 'CFI is a global leader in the manufacture of high-quality fluorine compounds, supplying specialty chemical products to various industries including semiconductors, pharmaceuticals, and agriculture.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '불소 고무' : 'Fluoroelastomers'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? 'FKM, FFKM 등' : 'FKM, FFKM, etc.'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '불소 수지' : 'Fluoropolymers'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? 'PTFE, FEP, PFA' : 'PTFE, FEP, PFA'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '불소 화학품' : 'Fluorochemicals'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '특수 불소 화합물' : 'Specialty fluorine compounds'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '표면처리제' : 'Surface Treatment Agents'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '발수/발유제' : 'Water/oil repellents'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-green-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '기술력' : 'Technology'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '최첨단 불소 중합 기술' : 'State-of-the-art fluorine polymerization technology'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? 'ISO 9001 인증' : 'ISO 9001 certified'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '맞춤형 솔루션 제공' : 'Customized solutions'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '전문 기술 지원팀' : 'Expert technical support team'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                            {isKorean ? '반도체' : 'Semiconductor'}
                        </span>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                            {isKorean ? '화학 공정' : 'Chemical Processing'}
                        </span>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                            {isKorean ? '항공우주' : 'Aerospace'}
                        </span>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                            {isKorean ? '자동차' : 'Automotive'}
                        </span>
                        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                            {isKorean ? '의약' : 'Pharmaceutical'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}