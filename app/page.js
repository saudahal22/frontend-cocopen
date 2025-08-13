"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoScroller from "../components/LogoScroller";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "../components/Animations";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero */}
        <div className="w-screen grid md:grid-cols-2 gap-1 bg-[#CDF1FF]">
          <div className="h-screen flex flex-col md:justify-center md:items-start justify-center items-center md:pl-20 md:mt-1 leading-none md:leading-snug">
            <h1 className="md:text-[60px] text-[50px] text-center md:text-start md:-tracking-[1px] font-extrabold tracking-wider px-10 text-[#37474f] mb-4">
              Dari Rasa{" "}
              <span className="text-[#0f5385] md:text-[45px] text-[35px]">
                Ingin Tahu,
                <br className="P-[-3]" /> Lahirnya Inovasi
              </span>
            </h1>
            <div className="text-[#464646] mb-4 md:px-10 text-center md:text-start">
              <p>Coconut Hadir Memberimu Ruang Untuk</p>
              <p>Berinovasi</p>
            </div>
            <div className="md:px-10">
              <button className="px-6 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition">
                <Link href="/register">BERGABUNG SEKARANG</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:justify-start md:items-center justify-center items-center p-10">
            <Image
              src="/hero_cocopen.png"
              alt="Hero Cocopen"
              width={500}
              height={500}
              className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] md:mt-20"
            />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] md:h-[130px] h-[50px]"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="fill-[#CDF1FF]"
            />
          </svg>
        </div>

        {/* Jurusan Section */}
        <section className="relative py-24 bg-gradient-to-r from-white/90 to-sky-50/90">
          <div className="container mx-auto ">
            {/* Logo Scroller */}
            <div className="text-center mb-12 md:px-40">
              <FadeIn delay={200}>
                <h1 className="text-lg text-[#a9a9ab] font-bold mb-6">
                  Alat tempur para Developers
                </h1>
              </FadeIn>
              <SlideUp delay={300}>
                <LogoScroller />
              </SlideUp>
            </div>
            <FadeIn>
              <div className="md:w-screen mt-10">
                <h1 className="text-center text-3xl text-[#08314f] font-extrabold">
                  Jurusan <span className="text-[#44CDFF]">Yang Tersedia</span>
                </h1>
                <p className="text-[#696984] text-center mt-6">
                  Coconut memiliki 3 jurusan yang dapat kalian fokuskan saat
                  kalian bergabung dengan kami
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-35 gap-15 px-15 md:px-10 max-w-7xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center md:w-[350px] md:h-[320px] h-[320px] hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4 mt-[-70px]">
                  <Image
                    src="/backend.png"
                    alt="Backend"
                    width={112}
                    height={112}
                    className="h-28 md:h-28 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">2019</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Tahun berdiri KAKU FOOD dengan satu gerai pertama di Makassar
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center md:w-[350px] md:h-[320px] h-[320px] hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4 mt-[-70px]">
                  <Image
                    src="/sistem.png"
                    alt="Sistem"
                    width={112}
                    height={112}
                    className="h-28 md:h-28 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">15+</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Jumlah cabang yang tersebar di Makassar
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow text-center md:w-[350px] md:h-[320px] h-[320px] hover:-translate-y-1 hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4 mt-[-70px]">
                  <Image
                    src="/Group front.png"
                    alt="Frontend"
                    width={112}
                    height={112}
                    className="h-28 md:h-28 object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">50+</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Varian produk makanan dan minuman
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Coconut */}
        <section className="relative ">
          <div className="container mx-auto px-6">
            {/* Bagian Judul & Deskripsi */}
            <FadeIn>
              <section className="text-center max-w-3xl mx-auto">
                <h2 className="font-semibold text-4xl md:font-extrabold text-[#08314f] mb-2">
                  Apa itu <span className="text-amber-500">COCONUT?</span>
                </h2>
                <p className="text-[#696984] mt-6">
                  Coconut adalah sebuah study yang berfokus pada bidang
                  pengembangan teknologi, coconut telah berdiri sendiri dan juga
                  telah diakui oleh negara karena telah sah dilindungi oleh
                  undang-undang, tepatnya pada n 2022
                </p>
              </section>
            </FadeIn>

            {/* Jarak dari teks ke gambar */}
            <div className="mb-12"></div>

            {/* Grid Gambar */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <SlideUp delay={200}>
                <div className="relative rounded-[15px] overflow-hidden w-full md:w-[500px] md:h-[320px] h-64">
                  <Image
                    src="https://storage.googleapis.com/a1aa/image/d4eefaeb-4b56-4fcf-a4d1-8c8476570823.jpg"
                    alt="Instructors"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
              </SlideUp>

              <SlideUp delay={400}>
                <div className="relative rounded-[15px] overflow-hidden w-full md:w-[500px] md:h-[320px] h-64">
                  <Image
                    src="https://storage.googleapis.com/a1aa/image/6ad42824-0c2a-434f-d0ed-bc69c396e5ba.jpg"
                    alt="Students"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
              </SlideUp>
            </div>

            <div className="mt-20"></div>

            {/* Kotak CTA */}
            <SlideUp delay={600}>
              <div className="max-w-7xl mx-auto">
                {/* Flex layout dari kode pertama, dibungkus dalam gradient card */}
               
                  <section className="flex flex-col md:flex-row md:px-5 gap-8 md:gap-20">
                    {/* Bagian Teks */}
                    <div className="flex-1">
                      {/* Lingkaran dekoratif */}
                      <div className="bg-amber-400 rounded-full w-15 h-15 mb-[-38px] ml-[-20px]"></div>

                      {/* Judul */}
                      <div className="flex items-center mb-2">
                        <h2 className="text-[#08314f] font-semibold text-[26px] md:mr-15 leading-tight">
                          Pembelajaran yang biasa Anda lakukan di <br /> kampus,
                          <span className="text-[#44CDFF]">
                            {" "}
                            akan tetap terasa sama di Coconut
                          </span>
                        </h2>
                      </div>

                      {/* Paragraf */}
                      <p className="text-[#696984] md:mt-12 leading-relaxed max-w-md">
                        Perangkat lunak manajemen sekolah Skilline membantu
                        sekolah tradisional dan daring mengelola penjadwalan,
                        kehadiran, pembayaran, dan ruang kelas virtual, semuanya
                        dalam satu sistem berbasis cloud yang aman.
                      </p>

                      {/* Tombol Learn More */}
                      <a
                        href="#"
                        className="text-[11px] md:text-xs text-[#44CDFF] mt-6 inline-block hover:underline"
                      >
                        Learn more
                      </a>
                    </div>

                    {/* Bagian Gambar */}
                    <div className="flex-1">
                      <Image
                        src="/Coding workshop-rafiki (1).png"
                        alt="Coding Workshop"
                        width={500}
                        height={400}
                        className="w-full h-auto md:mt-[-90px] rounded-lg"
                      />
                    </div>
                  </section>
                
              </div>
            </SlideUp>
          </div>
        </section>
      </main>

      {/* Animasi Gradient untuk Text */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background: linear-gradient(
            90deg,
            #1e40af,
            #0ea5e9,
            #0284c7,
            #1e40af
          );
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