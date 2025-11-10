export default async function LocationsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const isKorean = lang === 'ko'

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '사업장 소개' : 'Our Locations'}
            </h1>

            <div className="space-y-8">
                {/* 본사 */}
                <section className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                        <h2 className="text-2xl font-bold text-white">
                        {isKorean ? '본사' : 'Headquarters'}
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '주소' : 'Address'}
                            </h3>
                            <p className="text-gray-700">
                                {isKorean 
                                ? '서울특별시 강남구 테헤란로 123, 우리빌딩 10층'
                                : '10F, Woori Building, 123 Teheran-ro, Gangnam-gu, Seoul, Korea'}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '전화' : 'Tel'}
                                </h3>
                                <p className="text-gray-700">02-1234-5678</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '팩스' : 'Fax'}
                                </h3>
                                <p className="text-gray-700">02-1234-5679</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '이메일' : 'Email'}
                            </h3>
                            <p className="text-gray-700">info@woori-corp.com</p>
                        </div>
                        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                            <span className="text-gray-500">
                                {isKorean ? '[지도 이미지]' : '[Map Image]'}
                            </span>
                        </div>
                    </div>
                </section>

                {/* 물류센터 */}
                <section className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                        <h2 className="text-2xl font-bold text-white">
                        {isKorean ? '물류센터' : 'Logistics Center'}
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">
                                {isKorean ? '주소' : 'Address'}
                            </h3>
                            <p className="text-gray-700">
                                {isKorean 
                                ? '경기도 화성시 산업로 456'
                                : '456 Saneop-ro, Hwaseong-si, Gyeonggi-do, Korea'}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">
                                    {isKorean ? '전화' : 'Tel'}
                                </h3>
                                <p className="text-gray-700">031-1234-5678</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">
                                    {isKorean ? '팩스' : 'Fax'}
                                </h3>
                                <p className="text-gray-700">031-1234-5679</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                            <span className="text-gray-500">
                                {isKorean ? '[지도 이미지]' : '[Map Image]'}
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}