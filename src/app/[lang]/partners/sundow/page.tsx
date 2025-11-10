export default async function SundowPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-yellow-600 pb-4">
                Sundow
            </h1>

            <div className="space-y-8">
                <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '회사 소개' : 'Company Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? 'Sundow는 혁신적인 화학 솔루션을 제공하는 선도 기업으로, 플라스틱 가공 보조제와 기능성 첨가제 분야에서 탁월한 기술력을 보유하고 있습니다.'
                            : 'Sundow is a leading company providing innovative chemical solutions, with excellent technology in plastic processing aids and functional additives.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '주요 제품' : 'Main Products'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '가공 보조제' : 'Processing Aids'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? 'PVC 가공 보조제' : 'PVC processing aids'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? 'ACR 수지' : 'ACR Resins'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '충격 보강제' : 'Impact modifiers'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '윤활제' : 'Lubricants'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? 'PE wax, 금속 비누' : 'PE wax, metal soaps'}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '안정제' : 'Stabilizers'}
                            </h3>
                            <p className="text-gray-600">
                                {isKorean ? '칼슘아연 안정제' : 'Calcium-zinc stabilizers'}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-yellow-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '혁신 기술' : 'Innovative Technology'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '친환경 제품 개발' : 'Eco-friendly product development'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '고효율 가공 기술' : 'High-efficiency processing technology'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '맞춤형 제품 설계' : 'Customized product design'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '현장 기술 지원' : 'On-site technical support'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '적용 산업' : 'Industries'}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                            {isKorean ? 'PVC 가공' : 'PVC Processing'}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                            {isKorean ? '건축자재' : 'Building Materials'}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                            {isKorean ? '파이프' : 'Pipes'}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
                            {isKorean ? '프로파일' : 'Profiles'}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}