// src/app/components/Header.tsx
export default function Header() {
    return (
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <div className="flex space-x-4">
            <button className="text-white">English</button>
            <button className="text-white">فارسی</button>
            <button className="text-white">العربية</button>
          </div>
        </div>
      </header>
    );
  }