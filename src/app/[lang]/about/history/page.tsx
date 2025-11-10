export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function HistoryPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    const historyData = [
        { year: '2024', events: isKorean ? ['ISO 9001 인증 획득', '연매출 100억 달성'] : ['ISO 9001 Certification', 'Annual Revenue of 10 Billion KRW'] },
        { year: '2022', events: isKorean ? ['해외 사업부 확장', 'LANXESS 공식 파트너 계약'] : ['Overseas Business Expansion', 'Official Partner Contract with LANXESS'] },
        { year: '2020', events: isKorean ? ['본사 이전 (강남)', '직원 50명 돌파'] : ['Headquarters Relocation (Gangnam)', 'Employee Count Exceeded 50'] },
        { year: '2015', events: isKorean ? ['FreChem 파트너십 체결', '제품 라인업 확대'] : ['FreChem Partnership', 'Product Lineup Expansion'] },
        { year: '2010', events: isKorean ? ['우리코퍼레이션 설립'] : ['Woori Corporation Established'] },
    ]

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '회사연혁' : 'Company History'}
            </h1>

            <div className="relative border-l-4 border-blue-600 ml-4">
                {historyData.map((item, index) => (
                <div key={index} className="mb-10 ml-8">
                    <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-[14px] border-4 border-white"></div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-blue-800 mb-3">{item.year}</h2>
                        <ul className="space-y-2">
                            {item.events.map((event, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span className="text-gray-700">{event}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}