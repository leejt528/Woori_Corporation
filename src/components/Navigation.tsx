'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const lang = pathname.split('/')[1] || 'ko'
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    const menuItems = {
        ko: {
        about: {
            title: '회사소개',
            items: [
            { name: '인사말', href: `/${lang}/about/greeting` },
            { name: '회사개요', href: `/${lang}/about/overview` },
            { name: '회사연혁', href: `/${lang}/about/history` },
            { name: '사업장소개', href: `/${lang}/about/locations` },
            ]
        },
        products: {
            title: '제품소개',
            items: [
            { name: 'Fluoro Elastomer & Resin', href: `/${lang}/products/fluoro_elastomer_resin` },
            { name: 'Rubber', href: `/${lang}/products/rubber` },
            { name: 'Urethane', href: `/${lang}/products/urethane` },
            { name: 'Functional filler & Pigment', href: `/${lang}/products/functional_filler_pigment` },
            { name: 'Mold releases & Internal lubricants', href: `/${lang}/products/mold_releases_internal_lubricants` },
            { name: 'Flame retardants', href: `/${lang}/products/flame_retardants` },
            { name: 'Other additives', href: `/${lang}/products/other_additives` },
            ]
        },
        partners: {
            title: '협력사',
            items: [
            { name: 'AXEL', href: `/${lang}/partners/axel` },
            { name: 'CFI', href: `/${lang}/partners/cfi` },
            { name: 'FARETAR', href: `/${lang}/partners/faretar` },
            { name: 'FreChem', href: `/${lang}/partners/frechem` },
            { name: 'LANXESS', href: `/${lang}/partners/lanxess` },
            { name: 'Sundow', href: `/${lang}/partners/sundow` },
            ]
        },
        support: {
            title: '고객지원',
            items: [
            { name: '공지사항', href: `/${lang}/support/notices` },
            { name: '뉴스', href: `/${lang}/support/news` },
            ]
        }
        },
        en: {
        about: {
            title: 'About Us',
            items: [
            { name: 'Greeting', href: `/${lang}/about/greeting` },
            { name: 'Overview', href: `/${lang}/about/overview` },
            { name: 'History', href: `/${lang}/about/history` },
            { name: 'Locations', href: `/${lang}/about/locations` },
            ]
        },
        products: {
            title: 'Products',
            items: [
            { name: 'Fluoro Elastomer & Resin', href: `/${lang}/products/fluoro_elastomer_resin` },
            { name: 'Rubber', href: `/${lang}/products/rubber` },
            { name: 'Urethane', href: `/${lang}/products/urethane` },
            { name: 'Functional filler & Pigment', href: `/${lang}/products/functional_filler_pigment` },
            { name: 'Mold releases & Internal lubricants', href: `/${lang}/products/mold_releases_internal_lubricants` },
            { name: 'Flame retardants', href: `/${lang}/products/flame_retardants` },
            { name: 'Other additives', href: `/${lang}/products/other_additives` },
            ]
        },
        partners: {
            title: 'Partners',
            items: [
            { name: 'AXEL', href: `/${lang}/partners/axel` },
            { name: 'CFI', href: `/${lang}/partners/cfi` },
            { name: 'FARETAR', href: `/${lang}/partners/faretar` },
            { name: 'FreChem', href: `/${lang}/partners/frechem` },
            { name: 'LANXESS', href: `/${lang}/partners/lanxess` },
            { name: 'Sundow', href: `/${lang}/partners/sundow` },
            ]
        },
        support: {
            title: 'Support',
            items: [
            { name: 'Notices', href: `/${lang}/support/notices` },
            { name: 'News', href: `/${lang}/support/news` },
            ]
        }
        }
    }

    const currentMenuItems = menuItems[lang as 'ko' | 'en'] || menuItems.ko

    return (
        <nav className="border-t border-gray-200">
            <ul className="flex space-x-8">
                {Object.entries(currentMenuItems).map(([key, menu]) => (
                <li
                    key={key}
                    className="relative group"
                    onMouseEnter={() => setActiveMenu(key)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <button className="py-4 text-gray-700 hover:text-blue-600 font-medium">
                        {menu.title}
                    </button>

                    {/* 드롭다운 메뉴 */}
                    <div
                        className={`absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[250px] z-50 transition-all duration-200 ${
                            activeMenu === key ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    >
                        <ul className="py-2">
                            {menu.items.map((item, index) => (
                            <li key={index}>
                                <Link
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </li>
                ))}
            </ul>
        </nav>
    )
}