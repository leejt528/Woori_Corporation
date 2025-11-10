export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function OverviewPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '회사개요' : 'Company Overview'}
            </h1>

            <div className="space-y-8">
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '회사명' : 'Company Name'}
                        </h3>
                        <p className="text-gray-700">Woori Corporation</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '설립일' : 'Established'}
                        </h3>
                        <p className="text-gray-700">2010. 01. 01</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '대표이사' : 'CEO'}
                        </h3>
                        <p className="text-gray-700">{isKorean ? '홍길동' : 'Hong Gil Dong'}</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '사업분야' : 'Business Area'}
                        </h3>
                        <p className="text-gray-700">
                        {isKorean ? '화학 소재 유통' : 'Chemical Materials Distribution'}
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg md:col-span-2">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '주소' : 'Address'}
                        </h3>
                        <p className="text-gray-700">
                        {isKorean 
                            ? '서울특별시 강남구 테헤란로 123, 우리빌딩 10층'
                            : '10F, Woori Building, 123 Teheran-ro, Gangnam-gu, Seoul, Korea'}
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '전화' : 'Tel'}
                        </h3>
                        <p className="text-gray-700">02-1234-5678</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {isKorean ? '이메일' : 'Email'}
                        </h3>
                        <p className="text-gray-700">info@woori-corp.com</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {isKorean ? '사업 내용' : 'Business Description'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean 
                                ? 'Fluoro Elastomer & Resin 유통'
                                : 'Fluoro Elastomer & Resin Distribution'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean ? 'Rubber 소재 공급' : 'Rubber Material Supply'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean ? 'Urethane 제품 유통' : 'Urethane Product Distribution'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean 
                                ? 'Functional filler & Pigment 공급'
                                : 'Functional Filler & Pigment Supply'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean 
                                ? 'Mold releases & Internal lubricants 유통'
                                : 'Mold Releases & Internal Lubricants Distribution'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">
                                {isKorean ? 'Flame retardants 공급' : 'Flame Retardants Supply'}
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}