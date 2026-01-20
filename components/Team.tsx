
import React from 'react';

const team = [
  {
    role: "Komisaris",
    name: "Neneng Hernawati",
    image: "https://picsum.photos/400/500?random=1"
  },
  {
    role: "Direktur",
    name: "Reiza Akbar Rismaya",
    image: "https://picsum.photos/400/500?random=2"
  },
  {
    role: "Direktur",
    name: "Dadiek Siswanto",
    image: "https://picsum.photos/400/500?random=3"
  }
];

const Team: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Manajemen</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Susunan Komisaris & Direksi</h3>
          <p className="text-gray-600">
            Tim kepemimpinan kami berkomitmen untuk memberikan integritas dan kualitas terbaik dalam setiap layanan yang kami sediakan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
