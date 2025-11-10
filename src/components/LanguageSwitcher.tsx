'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const currentLang = pathname.split('/')[1] || 'ko'

    const switchLanguage = (newLang: string) => {
        const pathWithoutLang = pathname.split('/').slice(2).join('/')
        router.push(`/${newLang}/${pathWithoutLang}`)
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLanguage('ko')}
                className={`px-3 py-1 rounded ${
                currentLang === 'ko'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                한국어
            </button>
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded ${
                currentLang === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                English
            </button>
        </div>
    )
}