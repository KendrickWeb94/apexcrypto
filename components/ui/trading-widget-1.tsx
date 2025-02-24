"use client";

import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // Check if the script already exists
      if (!container.current.querySelector('script[data-tradingview-widget]')) {
        const script = document.createElement('script');
        script.src =
          'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.type = 'text/javascript';
        script.async = true;
        script.setAttribute('data-tradingview-widget', 'true'); // Unique identifier
        script.innerHTML = JSON.stringify({
          autosize: true,
          symbol: 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          allow_symbol_change: true,
          calendar: false,
          support_host: 'https://www.tradingview.com',
        });

        // Append the script to the container
        container.current.appendChild(script);
      }
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: '500px', width: '100%' }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: '500px', width: '100%' }}
      ></div>
    </div>
  );
};

export default memo(TradingViewWidget);