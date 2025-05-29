import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* לוגו */}
        <Link href="/" className="flex items-center gap-3 rtl:flex-row-reverse">
          <Image
            src="/logo.png"
            alt="SmartHome Logo"
            width={50} 
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* תפריט ניווט */}
        <ul className="flex space-x-8 rtl:space-x-reverse text-lg">
          <li><Link href="/" className="hover:text-blue-300 transition">בית</Link></li>
          <li><Link href="#services" className="hover:text-blue-300 transition">שירותים</Link></li>
          <li><Link href="#projects" className="hover:text-blue-300 transition">פרויקטים</Link></li>
          <li><Link href="#contact" className="hover:text-blue-300 transition">צור קשר</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
