'use client';

import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FadeIn, SlideUp } from '../../components/Animations';
import Link from 'next/link';

export default function Activity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 text-center">
          <div className="container mx-auto px-6">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 py-3 bg-gradient-to-r from-blue-800 via-sky-600 to-blue-900 bg-clip-text text-transparent animate-gradient">
                Kegiatan Kami
              </h1>
            </FadeIn>
            <SlideUp delay={200}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Workshop,dan Kolaborasi Teknologi untuk Generasi Muda
              </p>
            </SlideUp>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="relative py-24 bg-gradient-to-r from-white/90 to-sky-50/90">
          <div className="container mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16 ">
                <h2 className="text-4xl md:text-5xl py-3 font-bold font-playfair bg-gradient-to-r from-sky-600 via-blue-700 to-sky-600 bg-clip-text text-transparent">
                  Program & Aktivitas
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                  Berbagai kegiatan inovatif yang dirancang untuk mengasah keterampilan dibidang teknologi.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {   
                 
                  title: 'Webinar',
                  img: '/image/webinar.jpg',
                  delay: 200,
                },
                {
                  title: 'Webinar',
                  img: '/image/nawat.jpg',
                  delay: 300,
                },
                {
                  title: 'Coconut Open Class',
                  img: '/image/cocpare.png',
                  delay: 400,
                },
                {
                  title: 'Coconut Open Class',
                  img: '/image/coc2.png',
                  delay: 500,
                },
               
                {
                  title: 'Coconut Open Class',
                  img: '/cocokakdayat.png',
                  delay: 600,
                },  
                {
                  title: 'Coconut Open Class',
                  img: '/cocnextjs.png',
                  delay: 700,
                },
              
              ].map((activity, index) => (
                <SlideUp key={index} delay={activity.delay}>
                  <div className="group relative bg-gradient-to-br from-white/95 to-sky-50/95 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/60 backdrop-blur-sm">
                    <div className="relative overflow-hidden rounded-2xl mb-4  ">
                      <Image
                        src={activity.img}
                        alt={activity.title}
                        width={400}
                        height={250}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{activity.desc}</p>
                  </div>
                </SlideUp>
              ))}
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