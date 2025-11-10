export default async function FunctionalFillerPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-orange-600 pb-4">
                Functional Filler & Pigment
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                        ? '기능성 충진제 및 안료는 플라스틱, 고무, 코팅 등의 물성을 개선하고 색상을 부여하는 첨가제입니다.'
                        : 'Functional fillers and pigments are additives that improve the properties of plastics, rubber, coatings, and provide color.'}
                    </p>
                </section>

                <section className="bg-orange-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '기능성 충진제' : 'Functional Fillers'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                        <span className="text-orange-600 mr-2 font-bold">•</span>
                        <div>
                            <strong className="text-gray-800">{isKorean ? '탄산칼슘' : 'Calcium Carbonate'}</strong>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '비용 절감, 강성 향상' : 'Cost reduction, stiffness improvement'}
                            </p>
                        </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '탈크' : 'Talc'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '치수 안정성, 강도 개선' : 'Dimensional stability, strength improvement'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '유리섬유' : 'Glass Fiber'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '기계적 강도 향상' : 'Mechanical strength enhancement'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '카본 블랙' : 'Carbon Black'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? 'UV 차단, 전도성 부여' : 'UV protection, conductivity'}
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="bg-orange-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '안료' : 'Pigments'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '무기 안료' : 'Inorganic Pigments'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '내후성, 내열성 우수' : 'Excellent weather and heat resistance'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '유기 안료' : 'Organic Pigments'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '선명한 색상, 높은 착색력' : 'Vivid colors, high tinting strength'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '진주광택 안료' : 'Pearl Pigments'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '특수 효과, 광택' : 'Special effects, luster'}
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-orange-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '플라스틱' : 'Plastics'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '물성 개선, 착색' : 'Property improvement, coloring'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '코팅' : 'Coatings'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '페인트, 잉크' : 'Paints, inks'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '고무' : 'Rubber'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '보강, 착색' : 'Reinforcement, coloring'}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}