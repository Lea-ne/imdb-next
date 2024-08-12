import React from 'react';
import Image from 'next/image';

export default function CrewCard({ member }) {
  return (
    <div key={member.credit_id} className="crew-card">
      <Image
        src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
        width={100}
        height={150}
        alt={`Image de ${member.name}`}
      />
      <p>{member.name} - {member.job}</p>
    </div>
  );
}
