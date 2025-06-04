import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
  const t = useTranslations('navbar');
  const { locale, asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-blue-100 py-1 px-2 fixed w-full z-30 top-0 shadow-sm text-base transition-all">
      <div className="container mx-auto flex justify-between items-center min-h-0 h-14">
        <Link href="/" className="flex items-center gap-2 rtl:flex-row-reverse">
          <Image
            src="/circle.png"
            alt="MySmartHome Logo"
            width={36}
            height={36}
            className="object-contain drop-shadow"
            priority
          />
          <span className="font-bold text-blue-700 text-lg hidden sm:inline">MySmartHome</span>
        </Link>
        <ul className="flex space-x-4 rtl:space-x-reverse text-base font-medium">
          <li><Link href="/" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('home')}</Link></li>
          <li><Link href="#services" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('services')}</Link></li>
          <li><Link href="#plans" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('plans')}</Link></li>
          <li><Link href="#contact" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('contact')}</Link></li>
        </ul>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-blue-700 border border-blue-200 shadow text-sm font-semibold hover:bg-blue-100 hover:text-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            tabIndex={0}
          >
            <span>{languages.find(l => l.code === locale)?.label || 'Language'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open && (
            <ul className="absolute left-1/2 -translate-x-1/2 top-10 w-32 bg-white border border-blue-200 rounded-lg shadow-lg z-50 max-h-60 overflow-auto select-none" role="listbox">
              {languages.map(lang => (
                <li key={lang.code}>
                  <button
                    type="button"
                    className={`w-full text-left block px-4 py-2 text-sm rounded-lg transition-colors duration-150 ${locale === lang.code ? 'font-bold text-blue-700 bg-blue-100' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                    onClick={() => {
                      setOpen(false);
                      if (locale !== lang.code) {
                        window.location.href = `/${lang.code}${asPath.startsWith('/') ? asPath : '/' + asPath}`;
                      }
                    }}
                    role="option"
                    aria-selected={locale === lang.code}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
