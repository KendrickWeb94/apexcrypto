"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the TradingViewWidget component with SSR disabled
const TradingViewWidget = dynamic(
  () => import('./trading-widget-1'),
  { ssr: false }
);

const TradingViewPage: React.FC = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <TradingViewWidget />
    </div>
  );
};

export default TradingViewPage;