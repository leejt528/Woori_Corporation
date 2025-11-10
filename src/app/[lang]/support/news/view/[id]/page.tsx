import Link from 'next/link'
import newsData from '@/data/news.json'
import { type BoardPost } from '@/lib/board-utils'

export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function NewsDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params
    const isKorean = lang === 'ko'
    
    const news = newsData[lang as 'ko' | 'en'] || newsData.ko
    const newsItem = news.find((n: BoardPost) => n.id === parseInt(id))

    if (!newsItem) {
        return (
            <div className="max-w-4xl mx-auto text-center py-20">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {isKorean ? '게시물을 찾을 수 없습니다' : 'Post not found'}
                </h1>
                <Link 
                    href={`/${lang}/support/news`}
                    className="text-green-600 hover:underline"
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
                <div className="bg-green-600 text-white p-6">
                    <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
                    <div className="flex gap-6 text-sm">
                        <span>{isKorean ? '작성자' : 'Author'}: {newsItem.author}</span>
                        <span>{isKorean ? '작성일' : 'Date'}: {newsItem.date}</span>
                    </div>
                </div>

                {/* 본문 */}
                <div className="p-8">
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {newsItem.content}
                        </p>
                    </div>
                </div>
            </div>

            {/* 버튼 */}
            <div className="flex justify-center">
                <Link
                    href={`/${lang}/support/news`}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                    {isKorean ? '목록으로' : 'Back to List'}
                </Link>
            </div>
        </div>
    )
}
