
import React, { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  previousEffort: string[];
  treatment: string[];
  result: string[];
  summary: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Atap Beton Bocor Bertahun-tahun",
    summary: "Kebocoran atap beton rumah 2 lantai yang berlangsung 3 tahun. Setiap hujan, air merusak plafon dan interior.",
    problem: "Klien mengeluhkan kebocoran pada atap beton rumah tinggal 2 lantai. Masalah ini sudah berlangsung lebih dari 3 tahun. Setiap musim hujan, air rembes masuk ke plafon dan merusak finishing interior.",
    previousEffort: [
      "Menggunakan 2 aplikator berbeda",
      "Mencoba beberapa jenis bahan waterproofing",
      "Melakukan tambal lokal di area yang terlihat bocor"
    ],
    treatment: [
      "Inspeksi menyeluruh di seluruh struktur, bukan hanya titik bocor",
      "Analisis jalur rembesan air dan kondisi struktur beton",
      "Pembersihan dan persiapan permukaan secara total",
      "Repair concrete pada titik kebocoran dan keretakan (penyebab utama)",
      "Sistem waterproofing menyeluruh sebagai proteksi backup"
    ],
    result: [
      "Tidak ada lagi kebocoran hingga saat ini",
      "Sudah melewati beberapa musim hujan dengan aman",
      "Solusi permanen, bukan sekadar solusi sementara"
    ]
  },
  {
    id: 2,
    title: "Rembesan Basement Komersial",
    summary: "Masalah rembesan air pada dinding basement bangunan komersial yang gagal ditangani berkali-kali oleh vendor lain.",
    problem: "Sebuah bangunan komersial memiliki masalah rembesan air pada dinding basement. Air muncul dari beberapa titik dinding, terutama setelah hujan deras.",
    previousEffort: [
      "Pelapisan ulang waterproofing dari dalam",
      "Penggunaan bahan berbeda dari beberapa vendor",
      "Melakukan injeksi lokal"
    ],
    treatment: [
      "Identifikasi sumber tekanan air dari luar struktur",
      "Memetakan jalur masuk air secara teknis",
      "Kombinasi metode waterproofing struktural dan repair concrete",
      "Fokus pada pengendalian rembesan dan perlindungan jangka panjang"
    ],
    result: [
      "Area basement kembali kering total",
      "Tidak ada rembesan ulang hingga saat ini",
      "Bangunan kembali optimal digunakan untuk operasional"
    ]
  }
];

const CaseStudies: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="casestudies" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Dibalik Layar</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Studi Kasus</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                expandedId === study.id 
                ? 'shadow-2xl border-blue-200 ring-1 ring-blue-100' 
                : 'shadow-sm border-slate-100 hover:shadow-xl'
              }`}
            >
              {/* Header / "Scrape" Section */}
              <div 
                className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                      0{study.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {study.summary}
                  </p>
                </div>
                <button className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  expandedId === study.id ? 'bg-slate-900 text-white rotate-180' : 'bg-blue-50 text-blue-600'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Expanded Detail Section */}
              <div className={`transition-all duration-500 ease-in-out ${
                expandedId === study.id ? 'max-h-[1500px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 md:p-10 bg-slate-50/50 space-y-10">
                  {/* Problem */}
                  <div>
                    <h4 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">Masalah yang Dihadapi</h4>
                    <p className="text-slate-700 leading-relaxed font-medium bg-white p-6 rounded-2xl border border-slate-100">
                      {study.problem}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Efforts */}
                    <div className="space-y-4">
                      <h4 className="text-red-500 font-black uppercase tracking-widest text-xs">Upaya Sebelumnya (Gagal)</h4>
                      <ul className="space-y-3">
                        {study.previousEffort.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-500 font-medium italic">
                            <span className="text-red-400">✕</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                      <h4 className="text-green-600 font-black uppercase tracking-widest text-xs">Hasil Akhir (Permanen)</h4>
                      <ul className="space-y-3">
                        {study.result.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-900 font-bold">
                            <span className="text-green-500">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Approach / Treatment */}
                  <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-600/20">
                    <h4 className="font-black uppercase tracking-widest text-xs mb-6 opacity-80">Pendekatan & Treatment Tim Kiara Mas</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.treatment.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                          <div className="w-5 h-5 rounded-full bg-blue-400 flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold text-blue-900">
                            {i + 1}
                          </div>
                          <span className="text-sm font-medium leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
