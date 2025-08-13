'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoScroller from '../components/LogoScroller';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, SlideUp } from '../components/Animations';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative py-24 text-center">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="mb-16">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 blur-2xl animate-pulse"></div>
                  <h1 className="relative text-5xl md:text-7xl font-bold font-playfair mb-6">
                    <span className="bg-gradient-to-r from-blue-800 via-sky-600 to-blue-900 bg-clip-text text-transparent animate-gradient">
                      Dari Rasa Ingin Tahu
                    </span>
                    <br />
                    <span className="text-3xl md:text-5xl text-gray-700 font-light">Lahirnya Inovasi</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Coconut Hadir Memberimu Ruang Untuk Berinovasi
                </p>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-[#F48C06] to-orange-600 text-white font-semibold px-8 py-3 rounded-full hover:from-[#d57900] hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Link href="/register">JOIN NOW</Link>
                 </button>
                </div>
              </div>
            </FadeIn>

            <SlideUp delay={300}>
              <div className="relative group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/40 to-blue-400/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700">
                  <Image
                    src="/img/hero_cocopen.png"
                    alt="Hero Coconut"
                    width={500}
                    height={500}
                    className="mx-auto hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Wave Separator */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full md:h-32 h-16">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="fill-sky-100/60" />
          </svg>
        </div>

        {/* Jurusan Section */}
        <section className="relative py-24 bg-gradient-to-r from-white/90 to-sky-50/90">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
                  <span className="bg-gradient-to-r from-sky-600 via-blue-700 to-sky-600 bg-clip-text text-transparent">
                    Jurusan Yang Tersedia
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Coconut memiliki 3 jurusan yang dapat kalian fokuskan saat bergabung dengan kami
                </p>
              </div>
            </FadeIn>

            {/* Logo Scroller */}
            <div className="text-center mb-12">
              <FadeIn delay={200}>
                <h3 className="text-lg text-[#696984] font-bold mb-4">developers nighttime combat tools</h3>
              </FadeIn>
              <SlideUp delay={300}>
                <LogoScroller />
              </SlideUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                { year: '2019', desc: 'Tahun berdiri KAKU FOOD dengan satu gerai pertama di Makassar', img: '/img/backend.png' },
                { year: '15+', desc: 'Jumlah cabang yang tersebar di Makassar', img: '/img/sistem.png' },
                { year: '50+', desc: 'Varian produk makanan dan minuman', img: '/img/Group front.png' },
              ].map((item, index) => (
                <SlideUp key={index} delay={300 * (index + 1)}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-3xl blur-lg group-hover:blur-none transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-white/95 to-sky-50/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/60 text-center">
                      <div className="flex justify-center mb-4 -mt-10">
                        <Image src={item.img} alt="Jurusan" width={80} height={80} className="h-20 w-20 object-contain" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.year}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>

        {/* What is Coconut */}
<section className="relative py-24">
  <div className="container mx-auto px-6">
    {/* Bagian Judul & Deskripsi */}
    <FadeIn>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
          <span className="bg-gradient-to-r from-blue-800 via-sky-600 to-blue-900 bg-clip-text text-transparent">
            What is COCONUT?
          </span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Coconut adalah sebuah study yang berfokus pada bidang pengembangan teknologi, coconut telah berdiri sendiri dan juga telah diakui oleh negara karena telah sah dilindungi oleh undang-undang, tepatnya pada tahun 2022.
        </p>
      </div>
    </FadeIn>

    {/* Jarak dari teks ke gambar */}
    <div className="mb-12"></div>

    {/* Grid Gambar */}
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <SlideUp delay={200}>
        <div className="relative group rounded-3xl overflow-hidden">
          <Image
            src="https://storage.googleapis.com/a1aa/image/d4eefaeb-4b56-4fcf-a4d1-8c8476570823.jpg"
            alt="Instructors"
            width={500}
            height={320}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Instruktur Profesional</h3>
          </div>
        </div>
      </SlideUp>

      <SlideUp delay={400}>
        <div className="relative group rounded-3xl overflow-hidden">
          <Image
            src="https://storage.googleapis.com/a1aa/image/6ad42824-0c2a-434f-d0ed-bc69c396e5ba.jpg"
            alt="Students"
            width={500}
            height={320}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">Komunitas Aktif</h3>
          </div>
        </div>
      </SlideUp>
    </div>

    <div className="mt-20"></div>

    {/* Kotak CTA */}
    <SlideUp delay={600} className="max-w-lg mx-auto text-center">
      <div className="bg-gradient-to-r from-[#FF8040]/20 to-[#FF6B35]/10 p-8 rounded-2xl backdrop-blur-sm border border-[#FF8040]/30 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-[#FF8040] rounded-full w-12 h-12"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] leading-tight mb-4">
          Everything you can do in a physical classroom,{' '}
          <span className="text-[#44CDFF]">you can do with Coconut</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Coconut membantu siswa dan mentor mengelola pembelajaran, proyek, dan kolaborasi secara efektif dalam satu sistem terintegrasi.
        </p>
        <div className="mt-8">
          <Link href="/activity">
            <button className="bg-[#0E5284] hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:shadow-md transform hover:scale-105">
              Pelajari Lebih
            </button>
          </Link>
        </div>
      </div>
    </SlideUp>
  </div>
</section>
      </main>

      {/* Animasi Gradient untuk Text */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background: linear-gradient(90deg, #1e40af, #0ea5e9, #0284c7, #1e40af);
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <Footer />
    </div>
  );
}