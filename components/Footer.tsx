export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 설아쌤의 학교생활. All rights reserved.
          </p>
          {/* 여기에 새로운 컴포넌트를 추가하세요 (예: 푸터 링크 추가) */}
        </div>
      </div>
    </footer>
  );
}
