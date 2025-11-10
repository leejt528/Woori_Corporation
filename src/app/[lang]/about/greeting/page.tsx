export default async function GreetingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '인사말' : 'Greeting'}
            </h1>

            <div className="space-y-6">
                <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">
                        {isKorean ? 'Woori Corporation에 오신 것을 환영합니다' : 'Welcome to Woori Corporation'}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        {isKorean 
                        ? '저희 우리코퍼레이션을 방문해 주신 여러분께 진심으로 감사드립니다.'
                        : 'We sincerely thank you for visiting Woori Corporation.'}
                    </p>
                </section>

                <section className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {isKorean
                        ? '우리코퍼레이션은 고품질 화학 소재를 전문적으로 공급하는 기업으로, 고객의 성공을 최우선으로 생각하며 최고의 제품과 서비스를 제공하기 위해 노력하고 있습니다.'
                        : 'Woori Corporation is a company specializing in supplying high-quality chemical materials. We prioritize our customers\' success and strive to provide the best products and services.'}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        {isKorean
                        ? '당사는 Fluoro Elastomer & Resin, Rubber, Urethane 등 다양한 화학 소재를 취급하며, 국내외 유수의 협력사들과 긴밀한 파트너십을 바탕으로 고객 여러분께 최상의 제품을 공급하고 있습니다.'
                        : 'We handle various chemical materials such as Fluoro Elastomer & Resin, Rubber, and Urethane, and supply the best products to our customers based on close partnerships with leading domestic and international partners.'}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        {isKorean
                        ? '앞으로도 끊임없는 연구개발과 혁신을 통해 산업 발전에 기여하고, 고객 여러분과 함께 성장하는 기업이 되도록 최선을 다하겠습니다.'
                        : 'We will continue to contribute to industrial development through continuous research and innovation, and do our best to become a company that grows together with our customers.'}
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg text-right">
                    <p className="text-gray-600 mb-2">
                        {isKorean ? '우리코퍼레이션 대표이사' : 'CEO of Woori Corporation'}
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                        {isKorean ? '홍 길 동' : 'Hong Gil Dong'}
                    </p>
                </section>
            </div>
        </div>
    )
}