import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            설아쌤의 똑똑한 <span className="text-primary">학교생활을 위해</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 mx-auto mb-10">
            학생 관리, 성적 처리, 학급 운영까지 모든 것을 한 곳에서 간편하게 처리하세요.
            가장 스마트한 교사를 위한 최적의 도구입니다.
          </p>
          
          <div className="flex justify-center gap-4">
            {/* 기능 추가를 위한 가짜(Placeholder) 버튼 */}
            <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold text-lg shadow-md hover:bg-blue-600 transition-all hover:-translate-y-0.5">
              시작하기
            </button>
            {/* 여기에 새로운 컴포넌트를 추가하세요 (예: 추가 버튼) */}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-200 rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-200 rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
      </section>

      {/* Feature Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            핵심 기능 (준비중)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 여기에 새로운 컴포넌트를 추가하세요 (예: 기능 소개 카드들) */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">학생 관리</h3>
              <p className="text-gray-600">학생 정보를 쉽게 추가하고 관리할 수 있습니다.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">알림장</h3>
              <p className="text-gray-600">학부모와 학생에게 중요한 공지사항을 전달하세요.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">일정 관리</h3>
              <p className="text-gray-600">학사 일정과 개인 일정을 한눈에 확인하세요.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
