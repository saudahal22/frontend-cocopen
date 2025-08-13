'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white text-center py-6 mt-12">
      <div>
        <p className="text-sky-200 text-xs">
          © 2025 Coconut Lab • Dibuat dengan ❤ oleh hacklab
        </p>
      </div>
    </footer>
  );
}