export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function AxelPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                AXEL
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'AXEL은 고성능 플라스틱 첨가제 분야의 선도 기업으로, 혁신적인 기술력과 품질로 전 세계 고객들의 신뢰를 받고 있습니다.'
                            : 'AXEL is a leading company in the field of high-performance plastic additives, earning the trust of customers worldwide with innovative technology and quality.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '안정제' : 'Stabilizers'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '열 안정제, UV 안정제' : 'Heat stabilizers, UV stabilizers'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '윤활제' : 'Lubricants'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '내부/외부 윤활제' : 'Internal/external lubricants'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '충격 보강제' : 'Impact Modifiers'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '아크릴계 보강제' : 'Acrylic modifiers'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '가공 조제' : 'Processing Aids'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '가공성 개선 첨가제' : 'Processing improvement additives'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '주요 특징' : 'Key Features'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '우수한 품질 관리 시스템' : 'Excellent quality control system'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '지속적인 연구개발' : 'Continuous R&D'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '글로벌 공급망 네트워크' : 'Global supply chain network'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '친환경 제품 라인' : 'Eco-friendly product line'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                            {isKorean ? '자동차' : 'Automotive'}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                            {isKorean ? '건축' : 'Construction'}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                            {isKorean ? '전기/전자' : 'Electrical/Electronics'}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                            {isKorean ? '포장' : 'Packaging'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}