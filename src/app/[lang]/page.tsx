export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="space-y-16">
            {/* 메인 배너 */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    {isKorean ? 'Woori Corporation에 오신 것을 환영합니다' : 'Welcome to Woori Corporation'}
                </h1>
                <p className="text-xl">
                    {isKorean 
                        ? '고품질 화학 소재 전문 무역 기업' 
                        : 'Trading Company Specializing in High-Quality Chemicals'}
                </p>
            </section>

            {/* 회사 소개 */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        {isKorean ? '회사 소개' : 'About Us'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {isKorean 
                            ? '우리코퍼레이션은 고품질 화학 소재를 전문적으로 취급하는 무역 기업입니다. 다양한 산업 분야에 필요한 최고 품질의 제품을 공급하고 있습니다.'
                            : 'Woori Corporation is a trading company specializing in high-quality chemicals. We supply the best quality products needed in various industrial fields.'}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        {isKorean
                            ? '전문성과 신뢰를 바탕으로 고객과 함께 성장하는 기업이 되겠습니다.'
                            : 'We aim to grow together with our customers based on expertise and trust.'}
                    </p>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-500">
                        {isKorean ? '[회사 이미지]' : '[Company Image]'}
                    </span>
                </div>
            </section>

            {/* 주요 제품 카테고리 */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    {isKorean ? '주요 제품' : 'Main Products'}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-blue-600">Fluoro Elastomer & Resin</h3>
                        <p className="text-gray-600">
                            {isKorean 
                                ? '고성능 불소 고무 및 수지 제품'
                                : 'High-performance fluoro elastomer and resin products'}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-blue-600">Rubber</h3>
                        <p className="text-gray-600">
                            {isKorean 
                                ? '다양한 산업용 고무 소재'
                                : 'Various industrial rubber materials'}
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-3 text-blue-600">Urethane</h3>
                        <p className="text-gray-600">
                            {isKorean 
                                ? '고품질 우레탄 소재'
                                : 'High-quality urethane materials'}
                        </p>
                    </div>
                </div>
            </section>

            {/* 협력사 */}
            <section className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    {isKorean ? '주요 협력사' : 'Our Partners'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    {['AXEL', 'CFI', 'FARETAR', 'FreChem', 'LANXESS', 'Sundow'].map((partner) => (
                        <div key={partner} className="bg-white p-4 rounded-lg text-center shadow">
                            <p className="font-bold text-gray-700">{partner}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 연락처 */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    {isKorean ? '문의하기' : 'Contact Us'}
                </h2>
                <p className="text-gray-600 mb-6">
                    {isKorean 
                        ? '제품 및 서비스에 대한 문의사항이 있으시면 언제든지 연락주세요.'
                        : 'If you have any questions about our products and services, please contact us anytime.'}
                </p>
                <div className="inline-flex flex-col gap-2 text-left bg-blue-50 p-6 rounded-lg">
                    <p><strong>Tel:</strong> 02-1234-5678</p>
                    <p><strong>Email:</strong> info@woori-corp.com</p>
                </div>
            </section>
        </div>
    )
}