import React from 'react';

export default function CartBadge({ count }) {
  if (count === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
      {count > 99 ? '99+' : count}
    </span>
  );
}