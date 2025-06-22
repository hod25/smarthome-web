import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
  const t = useTranslations('navbar');
  const { locale, asPath } = useRouter();
  const isRtl = locale === 'he';
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    <nav className={`w-full py-0.1 px-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-50 ${isRtl ? '' : 'flex-row-reverse'}`} dir={isRtl ? 'rtl' : 'ltr'}>
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
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Main nav links for desktop */}
        <ul className="hidden sm:flex space-x-4 rtl:space-x-reverse text-base font-medium">
          <li><Link href="/" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('home')}</Link></li>
          <li><Link href="#services" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('services')}</Link></li>
          <li><Link href="#plans" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('plans')}</Link></li>
          <li><Link href="#contact" className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200">{t('contact')}</Link></li>
        </ul>
        <div className="relative ml-6" ref={dropdownRef}>
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-blue-700 border border-blue-200 shadow text-sm font-semibold hover:bg-blue-100 hover:text-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-200"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            tabIndex={0}
            style={{ left: '8px', position: 'relative' }}
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
        {/* Side drawer for mobile */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setDrawerOpen(false)}></div>
            <div className={`relative bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-4 ${isRtl ? 'right-0' : 'left-0'}`} style={{[isRtl ? 'right' : 'left']: 0, top: 0, position: 'fixed'}}>
              <button
                className="absolute top-4 right-4 text-blue-700 hover:text-blue-900"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium" onClick={() => setDrawerOpen(false)}>{t('home')}</Link>
                <Link href="#services" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium" onClick={() => setDrawerOpen(false)}>{t('services')}</Link>
                <Link href="#plans" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium" onClick={() => setDrawerOpen(false)}>{t('plans')}</Link>
                <Link href="#contact" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium" onClick={() => setDrawerOpen(false)}>{t('contact')}</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
