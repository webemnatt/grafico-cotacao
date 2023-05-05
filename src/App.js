import React, { useState, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import './style.scss';

const commoditiesList = ['Açúcar', 'Milho', 'Soja', 'Café', 'Boi'];

export default function App() {
  const [quotation, setQuotation] = React.useState('');
  const [points, setPoints] = React.useState('');
  const [activeButton, setActiveButton] = useState(null);
  const chartContainerRef = useRef(null);
  const [showChart, setShowChart] = useState(false);

  const handleButtonClick = (button) => {
    setQuotation('Bolsa de Chicago');
    setPoints('-102 pts');
    setActiveButton(button);
    setShowChart(true);

    const chart = createChart(chartContainerRef.current, {
      // width: window.innerWidth,
      // height: window.innerHeight,
      width: 600,
      height: 300,
      crosshair: {
        vertLine: {
          color: '#333',
          width: 1,
          style: 0,
        },
        horzLine: {
          color: '#333',
          width: 1,
          style: 0,
        },
      },
    });

    const areaSeries = chart.addAreaSeries({
      lineWidth: 2,
      lineColor: '#2b4d32',
      topColor: '#2b4d32',
      bottomColor: '#ffffff',
      crosshairMarkerBackgroundColor: 'red',
      crosshairMarkerBorderWidth: 0,
      // crosshairMarkerBorderColor
      crosshairMarkerRadius: 5,
    });

    areaSeries.setData([
      { time: '2019-01-11', value: 80.01 },
      { time: '2019-02-12', value: 96.63 },
      { time: '2019-03-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-05-15', value: 74.43 },
      { time: '2019-06-16', value: 80.01 },
      { time: '2019-07-17', value: 96.63 },
      { time: '2019-08-18', value: 76.64 },
      { time: '2019-09-19', value: 81.89 },
      { time: '2019-10-20', value: 74.43 },
      { time: '2019-11-21', value: 80.01 },
      { time: '2019-12-22', value: 70.43 },

      { time: '2020-01-11', value: 80.01 },
      { time: '2020-02-12', value: 96.63 },
      { time: '2020-03-13', value: 76.64 },
      { time: '2020-04-14', value: 81.89 },
      { time: '2020-05-15', value: 74.43 },
      { time: '2020-06-16', value: 80.01 },
      { time: '2020-07-17', value: 96.63 },
      { time: '2020-08-18', value: 76.64 },
      { time: '2020-09-19', value: 81.89 },
      { time: '2020-10-20', value: 74.43 },
      { time: '2020-11-21', value: 80.01 },
      { time: '2020-12-22', value: 70.43 },
    ]);

    chart.timeScale().fitContent();
  };

  return (
    <div>
      <div className="grafico-cotacoes-container">
        <div class="commodities">
          {commoditiesList.map((commodity, index) => (
            <button
              disabled={activeButton === `button${index + 1}`}
              onClick={() => handleButtonClick(`button${index + 1}`)}
            >
              {commodity}
            </button>
          ))}
        </div>
        <div className="quotation">
          <span className="quotationData">{quotation}</span>
          <span className="today-quotation">{points}</span>
        </div>
        <div className="chart-container">
          <div ref={chartContainerRef}>{showChart} </div>
        </div>
      </div>
    </div>
  );
}
