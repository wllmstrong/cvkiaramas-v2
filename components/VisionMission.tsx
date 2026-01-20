
import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <div className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="w-16 h-1 bg-blue-400 mb-6"></div>
            <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-4">Visi Perusahaan</h3>
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
              "Handal, qualified, dan mempunyai integritas profesional dalam bidang Struktur / Mutu / Kwalitas Beton dan Penanganan Permasalahannya."
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <div className="w-16 h-1 bg-blue-400 mb-6"></div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-6">Misi Perusahaan</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-lg text-gray-200">
                    Menawarkan dan memberikan layanan terbaik untuk cara menggunakan/mengaplikasikan produk-produk material instan yang benar dan tepat, serta menangani segala permasalahannya.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-lg text-gray-200">
                    Memperbaiki metode dan prosedur kerja secara terus menerus dalam rangka memberi kepuasan dan memenuhi kebutuhan klien.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-lg text-gray-200">
                    Berperan serta secara aktif dalam pembangunan properti dan infrastruktur di Indonesia dengan semangat dan kekuatan yang dimiliki.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
