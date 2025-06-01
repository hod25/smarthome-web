import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const t = useTranslations('navbar');
  const { locale, asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
  ];

  return (
    <nav className="bg-blue-500 text-white py-2 px-4 fixed w-full z-10 top-0 shadow text-base">
      <div className="container mx-auto flex justify-between items-center min-h-0 h-14">
        <Link href="/" className="flex items-center rtl:flex-row-reverse">
          <Image
            src="/smarthome.png"
            alt="SmartHome Logo"
            width={44}
            height={44}
            className="object-contain drop-shadow-lg"
            priority
          />
        </Link>
        <ul className="flex space-x-6 rtl:space-x-reverse text-base">
          <li><Link href="/" className="transition-colors duration-150 hover:text-blue-300 hover:underline">{t('home')}</Link></li>
          <li><Link href="#services" className="transition-colors duration-150 hover:text-blue-300 hover:underline">{t('services')}</Link></li>
          <li><Link href="#projects" className="transition-colors duration-150 hover:text-blue-300 hover:underline">{t('projects')}</Link></li>
          <li><Link href="#contact" className="transition-colors duration-150 hover:text-blue-300 hover:underline">{t('contact')}</Link></li>
        </ul>
        <div className="relative z-50">
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-blue-700 border border-blue-200 shadow text-sm font-semibold hover:bg-blue-100 hover:text-blue-900 transition"
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
                <li key={lang.code} className="">
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
