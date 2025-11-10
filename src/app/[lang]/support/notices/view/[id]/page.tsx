import Link from 'next/link'
import noticesData from '@/data/notices.json'
import { type BoardPost } from '@/lib/board-utils'

export default async function NoticeDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params
    const isKorean = lang === 'ko'
    
    const notices = noticesData[lang as 'ko' | 'en'] || noticesData.ko
    const notice = notices.find((n: BoardPost) => n.id === parseInt(id))

    if (!notice) {
        return (
            <div className="max-w-4xl mx-auto text-center py-20">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {isKorean ? '게시물을 찾을 수 없습니다' : 'Post not found'}
                </h1>
                <Link 
                    href={`/${lang}/support/notices`}
                    className="text-blue-600 hover:underline"
                >
                    {isKorean ? '목록으로 돌아가기' : 'Back to list'}
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* 헤더 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="bg-blue-600 text-white p-6">
                    <h1 className="text-3xl font-bold mb-4">{notice.title}</h1>
                    <div className="flex gap-6 text-sm">
                        <span>{isKorean ? '작성자' : 'Author'}: {notice.author}</span>
                        <span>{isKorean ? '작성일' : 'Date'}: {notice.date}</span>
                    </div>
                </div>

                {/* 본문 */}
                <div className="p-8">
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {notice.content}
                        </p>
                    </div>
                </div>
            </div>

            {/* 버튼 */}
            <div className="flex justify-center">
                <Link
                    href={`/${lang}/support/notices`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {isKorean ? '목록으로' : 'Back to List'}
                </Link>
            </div>
        </div>
    )
}