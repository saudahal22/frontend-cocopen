'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔶 Status login

  // Cek apakah user sudah login dari localStorage
  useEffect(() => {
    const user = localStorage.getItem('coconut_user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('coconut_user');
    setIsLoggedIn(false);
    alert('Anda berhasil keluar');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-white/30 backdrop-blur-lg shadow-lg py-4'
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between px-6 md:px-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Coconut Logo"
              width={40}
              height={40}
              className="h-10 w-auto transition-transform hover:scale-105 duration-300"
            />
          </Link>
        </div>

        <div className="flex space-x-6 text-center pl-10">
          {[
            { href: '/', label: 'BERANDA' },
            { href: '/about', label: 'TENTANG' },
            { href: '/activity', label: 'AKTIVITAS' },
            { href: '/contact', label: 'KONTAK' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative inline-block px-5 py-2 text-gray-800 font-medium rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
            >
              {item.label}
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
              <span className="absolute inset-0 flex items-center justify-center text-gray-800 group-hover:text-white transition-colors duration-300 pointer-events-none">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Ganti tombol dengan ikon profil jika sudah login */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative group">
              {/* Ikon Profil */}
              <button className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-sky-500 hover:border-sky-600 focus:outline-none">
                <Image
                  src="/user-avatar.png" // Ganti dengan path default avatar
                  alt="Profil Pengguna"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </button>

              {/* Dropdown Logout */}
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 rounded-t-lg"
                >
                  Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg"
                >
                  Keluar
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-1.5 px-4 rounded-full transition-transform hover:scale-105 duration-300 hover:shadow-md">
                  Masuk
                </button>
              </Link>
              <Link href="/registrasi">
                <button className="bg-black hover:bg-gray-700 text-white font-bold py-1.5 px-4 rounded-full transition-transform hover:scale-105 duration-300 hover:shadow-md">
                  Daftar
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="sm:hidden relative flex h-16 items-center justify-between px-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-white/5 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
            />
          </svg>
        </button>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Coconut Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-2 text-center">
            <Link
              href="/"
              className="block rounded-md bg-sky-600 px-3 py-2 text-base font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-sky-100 hover:text-sky-800 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/activity"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-sky-100 hover:text-sky-800 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Aktivitas
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-sky-100 hover:text-sky-800 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>

            <div className="flex justify-center space-x-4 mt-4">
              {isLoggedIn ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white font-bold py-1.5 px-4 rounded-full text-sm transition hover:scale-105"
                  >
                    Keluar
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <button className="bg-blue-500 text-white font-bold py-1.5 px-4 rounded-full text-sm transition hover:scale-105">
                      Masuk
                    </button>
                  </Link>
                  <Link href="/registrasi">
                    <button className="bg-black text-white font-bold py-1.5 px-4 rounded-full text-sm transition hover:scale-105">
                      Daftar
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}