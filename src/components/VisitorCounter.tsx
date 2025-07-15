import React, { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = localStorage.getItem('visitorCount');
    let newCount = 1;

    if (currentCount) {
      newCount = parseInt(currentCount) + 1;
    }

    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="text-white/60 hover:text-primary text-sm transition-colors">
      Total Visitors: {count}
    </div>
  );
};

export default VisitorCounter;
