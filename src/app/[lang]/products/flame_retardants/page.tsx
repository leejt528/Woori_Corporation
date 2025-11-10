export default async function FlameRetardantsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-yellow-600 pb-4">
                Flame Retardants
            </h1>

            <div className="space-y-8">
                <section>
                <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                    {isKorean ? '제품 개요' : 'Product Overview'}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {isKorean
                        ? '난연제는 플라스틱, 섬유, 코팅 등의 재료에 난연성을 부여하여 화재 발생 시 연소를 억제하거나 지연시키는 첨가제입니다.'
                        : 'Flame retardants are additives that provide flame resistance to materials such as plastics, textiles, and coatings, suppressing or delaying combustion in the event of fire.'}
                </p>
                </section>

                <section className="bg-yellow-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '난연제 종류' : 'Types of Flame Retardants'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '할로겐계 난연제' : 'Halogenated Flame Retardants'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '브롬계, 염소계 화합물' : 'Brominated, chlorinated compounds'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '인계 난연제' : 'Phosphorus-based Flame Retardants'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '적린, 유기 인 화합물' : 'Red phosphorus, organic phosphorus compounds'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '무기계 난연제' : 'Inorganic Flame Retardants'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '수산화 알루미늄, 수산화 마그네슘' : 'Aluminum hydroxide, magnesium hydroxide'}
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">•</span>
                            <div>
                                <strong className="text-gray-800">{isKorean ? '질소계 난연제' : 'Nitrogen-based Flame Retardants'}</strong>
                                <p className="text-gray-600 text-sm">
                                    {isKorean ? '멜라민 유도체' : 'Melamine derivatives'}
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="bg-yellow-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '난연 메커니즘' : 'Flame Retardant Mechanisms'}
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '기상 난연: 연소 반응 억제' : 'Gas phase: Combustion reaction suppression'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '고상 난연: 탄화층 형성' : 'Solid phase: Char layer formation'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '냉각 효과: 흡열 반응' : 'Cooling effect: Endothermic reaction'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-600 mr-2 font-bold">✓</span>
                            <span className="text-gray-700">
                                {isKorean ? '희석 효과: 불연성 가스 발생' : 'Dilution effect: Non-combustible gas generation'}
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-yellow-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '전기/전자' : 'Electrical/Electronics'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? 'TV, PC 케이스' : 'TV, PC cases'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '건축/건설' : 'Construction'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '단열재, 전선 피복' : 'Insulation, wire coating'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '자동차' : 'Automotive'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '내장재' : 'Interior materials'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '섬유' : 'Textiles'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '커튼, 카펫' : 'Curtains, carpets'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '가구' : 'Furniture'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '우레탄 폼' : 'Urethane foam'}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '운송' : 'Transportation'}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {isKorean ? '항공, 철도' : 'Aviation, railway'}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}