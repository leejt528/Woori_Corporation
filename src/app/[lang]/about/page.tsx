import Link from 'next/link'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    const aboutMenus = [
        {
            title: isKorean ? '인사말' : 'Greeting',
            description: isKorean ? 'CEO 인사말' : 'CEO Greeting',
            href: `/${lang}/about/greeting`,
            icon: '👋'
        },
        {
            title: isKorean ? '회사개요' : 'Company Overview',
            description: isKorean ? '회사 기본 정보' : 'Basic Company Information',
            href: `/${lang}/about/overview`,
            icon: '🏢'
        },
        {
            title: isKorean ? '회사연혁' : 'Company History',
            description: isKorean ? '우리의 발자취' : 'Our Journey',
            href: `/${lang}/about/history`,
            icon: '📅'
        },
        {
            title: isKorean ? '사업장소개' : 'Our Locations',
            description: isKorean ? '본사 및 물류센터' : 'Headquarters & Logistics Center',
            href: `/${lang}/about/locations`,
            icon: '📍'
        }
    ]

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '회사 소개' : 'About Us'}
            </h1>

            <p className="text-lg text-gray-600 mb-12">
                {isKorean 
                    ? '우리코퍼레이션의 비전과 역사를 소개합니다.'
                    : 'Introducing Woori Corporation\'s vision and history.'}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {aboutMenus.map((menu, index) => (
                    <Link 
                        key={index}
                        href={menu.href}
                        className="group"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1">
                            <div className="text-5xl mb-4">{menu.icon}</div>
                            <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600">
                                {menu.title}
                            </h2>
                            <p className="text-gray-600">{menu.description}</p>
                            <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
                                {isKorean ? '자세히 보기 →' : 'Learn More →'}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}