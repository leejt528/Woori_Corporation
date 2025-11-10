'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Navigation from './Navigation'

export default function Header() {
    const pathname = usePathname()
    const lang = pathname.split('/')[1] || 'ko'

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* 로고 */}
                    <Link href={`/${lang}`} className="text-2xl font-bold text-blue-600">
                        Woori Corporation
                    </Link>

                    {/* 언어 전환 */}
                    <LanguageSwitcher />
                </div>

                {/* 네비게이션 */}
                <Navigation />
            </div>
        </header>
    )
}