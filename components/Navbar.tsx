import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const t = useTranslations('navbar');
  const { locale, asPath } = useRouter();

  return (
    <nav className="bg-blue-500 text-white p-4 fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center rtl:flex-row-reverse">
          <Image
            src="/Logo.png"
            alt="SmartHome Logo"
            width={64}
            height={64}
            className="object-contain drop-shadow-lg"
            priority
          />
        </Link>
        <ul className="flex space-x-8 rtl:space-x-reverse text-lg">
          <li><Link href="/">{t('home')}</Link></li>
          <li><Link href="#services">{t('services')}</Link></li>
          <li><Link href="#projects">{t('projects')}</Link></li>
          <li><Link href="#contact">{t('contact')}</Link></li>
        </ul>
        <div className="flex gap-2">
          <Link href={asPath} locale="he">
            <button className={`px-2 py-1 rounded ${locale === 'he' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white border'}`}>עברית</button>
          </Link>
          <Link href={asPath} locale="en">
            <button className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white border'}`}>English</button>
          </Link>
          <Link href={asPath} locale="de">
            <button className={`px-2 py-1 rounded ${locale === 'de' ? 'bg-white text-blue-700' : 'bg-blue-700 text-white border'}`}>Deutsch</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
