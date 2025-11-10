export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Woori Corporation</h3>
                        <p className="text-gray-300">
                        고품질 화학 소재 전문 무역 기업
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">연락처</h4>
                        <p className="text-gray-300">
                        Tel: 02-1234-5678<br />
                        Fax: 02-1234-5679<br />
                        Email: info@woori-corp.com
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">주소</h4>
                        <p className="text-gray-300">
                        서울특별시 강남구 테헤란로 123<br />
                        우리빌딩 10층
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Woori Corporation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}