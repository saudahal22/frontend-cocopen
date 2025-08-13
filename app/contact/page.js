'use client';

import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FadeIn, SlideUp } from '../../components/Animations';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 text-center">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 bg-gradient-to-r from-blue-800 via-sky-600 to-blue-900 bg-clip-text text-transparent animate-gradient">
                Contact Us
              </h1>
            </FadeIn>
            <SlideUp delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Kami terbuka untuk pertanyaan, kolaborasi, atau pendaftaran anggota baru.
                <br />
                Jangan ragu untuk menghubungi kami!
              </p>
            </SlideUp>

            {/* Form & Map */}
            <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto mt-12">
              {/* Form Kontak */}
              <div className="flex-1">
                <SlideUp delay={300}>
                  <div className="bg-gradient-to-br from-white/95 to-sky-50/95 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 backdrop-blur-sm">
                    <form className="space-y-6">
                      {/* Nama Depan & Belakang */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <input
                            type="text"
                            placeholder="John"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <input
                            type="text"
                            placeholder="Doe"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="you@email.com"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                          <select className="absolute top-0 left-0 w-24 h-full bg-gray-50 border border-gray-300 rounded-l-lg text-gray-700 text-sm focus:outline-none">
                            <option value="+62">+62 (ID)</option>
                          </select>
                          <input
                            type="tel"
                            placeholder="812-3456-7890"
                            className="w-full p-3 pl-28 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                          placeholder="Tulis pesan kamu di sini..."
                          rows="5"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-500 outline-none transition resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          📩 Kirim Pesan
                        </button>
                      </div>
                    </form>
                  </div>
                </SlideUp>
              </div>

              {/* Peta Lokasi */}
              <div className="flex-1">
                <SlideUp delay={500}>
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <Image
                      src="/lokasi.png"
                      alt="Lokasi Coconut Lab"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-6 left-6 text-white z-20">
                      <h3 className="text-xl font-bold">Kantor Kami</h3>
                      <p className="text-sm">Jl. Teknologi No. 1, Makassar</p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
    </div>
  );
}