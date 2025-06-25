import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
  isRtl: boolean;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ open, onClose, isRtl }) => {
  const t = useTranslations('navbar');
  return (
    open ? (
      <div className="fixed inset-0 z-50 flex">
        <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose}></div>
        <aside
          className={`relative bg-white w-72 max-w-full h-full shadow-xl p-6 flex flex-col gap-4 animate-slide-in ${isRtl ? 'right-0' : 'left-0'}`}
          style={{ [isRtl ? 'right' : 'left']: 0, top: 0, position: 'fixed' }}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <button
            className="absolute top-4 right-4 text-blue-700 hover:text-blue-900"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <nav className="flex flex-col gap-4 mt-8 items-center">
            <Link href="/" className="flex items-center gap-2 mb-6" onClick={onClose}>
              <img src="/circle.png" alt="MySmartHome Logo" width={40} height={40} className="object-contain drop-shadow" />
              <span className="font-bold text-blue-700 text-xl">MySmartHome</span>
            </Link>
            <Link href="/" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium w-full text-center" onClick={onClose}>{t('home')}</Link>
            <Link href="#services" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium w-full text-center" onClick={onClose}>{t('services')}</Link>
            <Link href="#plans" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium w-full text-center" onClick={onClose}>{t('plans')}</Link>
            <Link href="#contact" className="py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-700 text-lg font-medium w-full text-center" onClick={onClose}>{t('contact')}</Link>
          </nav>
        </aside>
        <style jsx>{`
          @keyframes slide-in {
            from { transform: translateX(${isRtl ? '100%' : '-100%'}); }
            to { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
          }
        `}</style>
      </div>
    ) : null
  );
};

export default SidebarMenu;
