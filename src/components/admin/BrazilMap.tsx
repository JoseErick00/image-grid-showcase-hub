import React from 'react';

interface StateData {
  [stateCode: string]: number;
}

interface BrazilMapProps {
  data: StateData;
  maxValue?: number;
}

// State codes and their SVG path data for simplified Brazil map
const BRAZIL_STATES: Record<string, { name: string; path: string; cx: number; cy: number }> = {
  AC: { name: "Acre", path: "M85,280 L115,280 L115,310 L85,310 Z", cx: 100, cy: 295 },
  AL: { name: "Alagoas", path: "M470,260 L490,260 L490,275 L470,275 Z", cx: 480, cy: 267 },
  AP: { name: "Amapá", path: "M310,80 L340,80 L340,120 L310,120 Z", cx: 325, cy: 100 },
  AM: { name: "Amazonas", path: "M120,150 L270,150 L270,270 L120,270 Z", cx: 195, cy: 210 },
  BA: { name: "Bahia", path: "M380,230 L470,230 L470,320 L380,320 Z", cx: 425, cy: 275 },
  CE: { name: "Ceará", path: "M430,180 L480,180 L480,220 L430,220 Z", cx: 455, cy: 200 },
  DF: { name: "Distrito Federal", path: "M340,310 L360,310 L360,325 L340,325 Z", cx: 350, cy: 317 },
  ES: { name: "Espírito Santo", path: "M430,340 L460,340 L460,375 L430,375 Z", cx: 445, cy: 357 },
  GO: { name: "Goiás", path: "M300,290 L380,290 L380,360 L300,360 Z", cx: 340, cy: 325 },
  MA: { name: "Maranhão", path: "M350,160 L420,160 L420,220 L350,220 Z", cx: 385, cy: 190 },
  MT: { name: "Mato Grosso", path: "M200,270 L300,270 L300,370 L200,370 Z", cx: 250, cy: 320 },
  MS: { name: "Mato Grosso do Sul", path: "M240,370 L320,370 L320,440 L240,440 Z", cx: 280, cy: 405 },
  MG: { name: "Minas Gerais", path: "M340,320 L430,320 L430,400 L340,400 Z", cx: 385, cy: 360 },
  PA: { name: "Pará", path: "M250,120 L380,120 L380,210 L250,210 Z", cx: 315, cy: 165 },
  PB: { name: "Paraíba", path: "M460,210 L500,210 L500,230 L460,230 Z", cx: 480, cy: 220 },
  PR: { name: "Paraná", path: "M280,420 L360,420 L360,470 L280,470 Z", cx: 320, cy: 445 },
  PE: { name: "Pernambuco", path: "M430,230 L500,230 L500,260 L430,260 Z", cx: 465, cy: 245 },
  PI: { name: "Piauí", path: "M380,180 L430,180 L430,250 L380,250 Z", cx: 405, cy: 215 },
  RJ: { name: "Rio de Janeiro", path: "M400,400 L450,400 L450,430 L400,430 Z", cx: 425, cy: 415 },
  RN: { name: "Rio Grande do Norte", path: "M460,185 L500,185 L500,210 L460,210 Z", cx: 480, cy: 197 },
  RS: { name: "Rio Grande do Sul", path: "M280,480 L350,480 L350,550 L280,550 Z", cx: 315, cy: 515 },
  RO: { name: "Rondônia", path: "M150,300 L200,300 L200,360 L150,360 Z", cx: 175, cy: 330 },
  RR: { name: "Roraima", path: "M180,80 L240,80 L240,150 L180,150 Z", cx: 210, cy: 115 },
  SC: { name: "Santa Catarina", path: "M310,470 L370,470 L370,510 L310,510 Z", cx: 340, cy: 490 },
  SP: { name: "São Paulo", path: "M320,390 L400,390 L400,450 L320,450 Z", cx: 360, cy: 420 },
  SE: { name: "Sergipe", path: "M465,275 L490,275 L490,295 L465,295 Z", cx: 477, cy: 285 },
  TO: { name: "Tocantins", path: "M320,210 L380,210 L380,290 L320,290 Z", cx: 350, cy: 250 },
};

// Get color based on intensity
const getColor = (value: number, maxValue: number): string => {
  if (value === 0) return "#e5e7eb"; // gray-200
  
  const intensity = Math.min(value / maxValue, 1);
  
  // Gradient from light blue to dark blue
  if (intensity < 0.2) return "#dbeafe"; // blue-100
  if (intensity < 0.4) return "#93c5fd"; // blue-300
  if (intensity < 0.6) return "#3b82f6"; // blue-500
  if (intensity < 0.8) return "#1d4ed8"; // blue-700
  return "#1e3a8a"; // blue-900
};

const BrazilMap: React.FC<BrazilMapProps> = ({ data, maxValue }) => {
  const calculatedMax = maxValue || Math.max(...Object.values(data), 1);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 550 600"
        className="w-full h-auto"
        style={{ maxHeight: "500px" }}
      >
        {/* Render each state */}
        {Object.entries(BRAZIL_STATES).map(([code, state]) => {
          const value = data[code] || 0;
          const color = getColor(value, calculatedMax);
          
          return (
            <g key={code} className="cursor-pointer transition-opacity hover:opacity-80">
              <path
                d={state.path}
                fill={color}
                stroke="#374151"
                strokeWidth="1"
                className="transition-all"
              />
              {value > 0 && (
                <text
                  x={state.cx}
                  y={state.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[10px] font-bold fill-white pointer-events-none"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {value}
                </text>
              )}
              <title>{`${state.name}: ${value} cliques`}</title>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="text-xs text-gray-500">Menos</span>
        <div className="flex">
          <div className="w-6 h-4 bg-gray-200" />
          <div className="w-6 h-4 bg-blue-100" />
          <div className="w-6 h-4 bg-blue-300" />
          <div className="w-6 h-4 bg-blue-500" />
          <div className="w-6 h-4 bg-blue-700" />
          <div className="w-6 h-4 bg-blue-900" />
        </div>
        <span className="text-xs text-gray-500">Mais</span>
      </div>
    </div>
  );
};

export default BrazilMap;
