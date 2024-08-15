// component/ui/ButtonWithIcon.jsx
import React from 'react';

export default function ButtonWithIcon({ icon, buttonText }) {
  return (
    <div>
      <p>{icon}</p>
      <p>{buttonText}</p>
    </div>
  );
}
