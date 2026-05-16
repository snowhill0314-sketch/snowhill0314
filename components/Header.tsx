import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              설아쌤의 학교생활
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
              기능소개
            </Link>
            {/* 여기에 새로운 컴포넌트를 추가하세요 (예: 네비게이션 메뉴 추가) */}
          </nav>
          
          {/* Mobile menu button placeholder */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
