import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const { locale, asPath } = useRouter();

  return (
    <div className="flex justify-center mt-4 space-x-4 rtl:space-x-reverse">
      <Link
        href={asPath}
        locale="he"
        className={`px-4 py-1 rounded ${
          locale === 'he' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border'
        }`}
      >
        עברית
      </Link>
      <Link
        href={asPath}
        locale="en"
        className={`px-4 py-1 rounded ${
          locale === 'en' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border'
        }`}
      >
        English
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
