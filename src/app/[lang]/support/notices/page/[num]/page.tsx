import Link from 'next/link'
import noticesData from '@/data/notices.json'
import { getPaginatedPosts, getTotalPages, type BoardPost } from '@/lib/board-utils'

export async function generateStaticParams() {
    return [
        { lang: 'ko' },
        { lang: 'en' }
    ]
}

export default async function NoticesPageNum({ params }: { params: Promise<{ lang: string; num: string }> }) {
    const { lang, num } = await params
    const isKorean = lang === 'ko'
    
    const notices = noticesData[lang as 'ko' | 'en'] || noticesData.ko
    const currentPage = parseInt(num) || 1
    const paginatedNotices = getPaginatedPosts(notices, currentPage)
    const totalPages = getTotalPages(notices.length)

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-600 pb-4">
                {isKorean ? '공지사항' : 'Notices'}
            </h1>

            <div className="bg-white rounded-lg shadow">
                {/* 테이블 헤더 */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-blue-600 text-white font-bold rounded-t-lg">
                    <div className="col-span-1 text-center">{isKorean ? '번호' : 'No.'}</div>
                    <div className="col-span-7">{isKorean ? '제목' : 'Title'}</div>
                    <div className="col-span-2 text-center">{isKorean ? '작성자' : 'Author'}</div>
                    <div className="col-span-2 text-center">{isKorean ? '작성일' : 'Date'}</div>
                </div>

                {/* 게시물 목록 */}
                {paginatedNotices.map((notice: BoardPost, index: number) => (
                    <Link
                        key={notice.id}
                        href={`/${lang}/support/notices/view/${notice.id}`}
                        className="grid grid-cols-12 gap-4 p-4 border-b hover:bg-blue-50 transition-colors"
                    >
                        <div className="col-span-1 text-center text-gray-600">
                            {notices.length - ((currentPage - 1) * 10 + index)}
                        </div>
                        <div className="col-span-7 text-gray-800 hover:text-blue-600 font-medium truncate">
                            {notice.title}
                        </div>
                        <div className="col-span-2 text-center text-gray-600">{notice.author}</div>
                        <div className="col-span-2 text-center text-gray-600">{notice.date}</div>
                    </Link>
                ))}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Link
                            key={page}
                            href={page === 1 ? `/${lang}/support/notices` : `/${lang}/support/notices/page/${page}`}
                            className={`px-4 py-2 rounded ${
                                page === currentPage
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            >
                            {page}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}