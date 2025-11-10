export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function MoldReleasesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-red-600 pb-4">
                Mold Releases & Internal Lubricants
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? '이형제는 성형 공정에서 제품의 금형 이탈을 용이하게 하고, 내부 윤활제는 수지의 가공성을 향상시키는 첨가제입니다.'
                            : 'Mold releases facilitate product release from molds in molding processes, and internal lubricants are additives that improve resin processability.'}
                    </p>
                </section>

                <section className="bg-red-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '이형제' : 'Mold Releases'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '외부 이형제' : 'External Mold Releases'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '금형 표면에 직접 도포' : 'Applied directly to mold surface'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '내부 이형제' : 'Internal Mold Releases'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '수지에 혼합하여 사용' : 'Mixed with resin'}
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="bg-red-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '내부 윤활제' : 'Internal Lubricants'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '가공 온도 저하' : 'Processing temperature reduction'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '수지 유동성 개선' : 'Improved resin flowability'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '에너지 절감' : 'Energy savings'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '표면 광택 향상' : 'Surface gloss improvement'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '왁스계 윤활제' : 'Wax-based Lubricants'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? 'PE wax, PP wax' : 'PE wax, PP wax'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '금속 비누' : 'Metal Soaps'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '칼슘, 아연 스테아레이트' : 'Calcium, zinc stearate'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '지방산 에스터' : 'Fatty Acid Esters'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '다양한 에스터 화합물' : 'Various ester compounds'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '실리콘계' : 'Silicone-based'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '실리콘 오일, 파우더' : 'Silicone oil, powder'}
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '사출 성형' : 'Injection Molding'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '플라스틱 제품 제조' : 'Plastic product manufacturing'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '압출 성형' : 'Extrusion'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '필름, 파이프 제조' : 'Film, pipe manufacturing'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '고무 가공' : 'Rubber Processing'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '타이어, 호스 제조' : 'Tire, hose manufacturing'}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}