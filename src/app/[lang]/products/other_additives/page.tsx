export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function OtherAdditivesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-gray-600 pb-4">
                Other Additives
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {isKorean ? '제품 개요' : 'Product Overview'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {isKorean
                            ? '다양한 산업 분야에서 사용되는 기타 첨가제들을 공급합니다. 각 첨가제는 특정 목적에 맞게 선택하여 사용됩니다.'
                            : 'We supply various other additives used in diverse industrial fields. Each additive is selected and used according to specific purposes.'}
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-blue-800 mb-3">
                            {isKorean ? '안정제' : 'Stabilizers'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '플라스틱의 열화 방지' : 'Preventing plastic degradation'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '열 안정제' : 'Heat stabilizers'}</li>
                            <li>• {isKorean ? 'UV 안정제' : 'UV stabilizers'}</li>
                            <li>• {isKorean ? '산화 방지제' : 'Antioxidants'}</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-800 mb-3">
                            {isKorean ? '가소제' : 'Plasticizers'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '플라스틱의 유연성 향상' : 'Improving plastic flexibility'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '프탈레이트계' : 'Phthalate-based'}</li>
                            <li>• {isKorean ? '비프탈레이트계' : 'Non-phthalate-based'}</li>
                            <li>• {isKorean ? '바이오 가소제' : 'Bio-plasticizers'}</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-purple-800 mb-3">
                            {isKorean ? '대전방지제' : 'Antistatic Agents'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '정전기 발생 방지' : 'Preventing static electricity'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '외부 대전방지제' : 'External antistatic agents'}</li>
                            <li>• {isKorean ? '내부 대전방지제' : 'Internal antistatic agents'}</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-800 mb-3">
                            {isKorean ? '발포제' : 'Blowing Agents'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '발포 플라스틱 제조' : 'Foamed plastic manufacturing'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '화학 발포제' : 'Chemical blowing agents'}</li>
                            <li>• {isKorean ? '물리 발포제' : 'Physical blowing agents'}</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-red-800 mb-3">
                            {isKorean ? '커플링제' : 'Coupling Agents'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '수지와 충진제 간 접착력 향상' : 'Improving adhesion between resin and filler'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '실란 커플링제' : 'Silane coupling agents'}</li>
                            <li>• {isKorean ? '티타네이트 커플링제' : 'Titanate coupling agents'}</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-yellow-800 mb-3">
                            {isKorean ? '충격 보강제' : 'Impact Modifiers'}
                        </h3>
                        <p className="text-gray-700 mb-2">
                            {isKorean ? '충격 강도 개선' : 'Improving impact strength'}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• {isKorean ? '아크릴계 보강제' : 'Acrylic modifiers'}</li>
                            <li>• {isKorean ? '코어쉘 폴리머' : 'Core-shell polymers'}</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {isKorean ? '적용 분야' : 'Applications'}
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow text-center">
                            <p className="font-bold text-gray-800">{isKorean ? '플라스틱' : 'Plastics'}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow text-center">
                            <p className="font-bold text-gray-800">{isKorean ? '고무' : 'Rubber'}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow text-center">
                            <p className="font-bold text-gray-800">{isKorean ? '코팅' : 'Coatings'}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow text-center">
                            <p className="font-bold text-gray-800">{isKorean ? '섬유' : 'Textiles'}</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {isKorean ? '문의하기' : 'Contact Us'}
                    </h2>
                    <p className="text-gray-700 mb-4">
                        {isKorean 
                            ? '제품에 대한 자세한 정보나 견적이 필요하신 경우 언제든지 연락 주시기 바랍니다.'
                            : 'For more detailed information or quotations about this product, please feel free to contact us.'}
                    </p>
                    <div className="flex gap-4">
                        <span className="text-gray-700"><strong>Tel:</strong> 02-1234-5678</span>
                        <span className="text-gray-700"><strong>Email:</strong> info@woori-corp.com</span>
                    </div>
                </section>
            </div>
        </div>
    )
}