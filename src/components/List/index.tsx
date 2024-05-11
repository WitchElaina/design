import { useEffect, useState } from 'react';
import './index.css';

export interface ListData {
  date: string;
  time: string;
  modeName: string;
  modeInfo: string;
  no: string;
}

export interface ListProps {
  data: ListData[];
}

export default function List({ data }: ListProps) {
  const [cur, setCur] = useState<number>(0);

  return (
    <div className="list-wrapper">
      {data.map((item, index) => {
        let className = 'list-item';

        if (index === cur) {
          className += ' selected';
        } else if (index - cur === 1) {
          className += ' prev';
        } else if (index - cur === -1) {
          className += ' next';
        }

        return (
          <div key={index} className={className} onClick={() => setCur(index)}>
            <div className="list-content">
              <div className="date">{item.date}</div>
              {index === cur && <div className="time">{item.time}</div>}
            </div>
            <div className="list-content">
              <div className="mode-name">{item.modeName}</div>
              {index === cur && (
                <div className="mode-info">{item.modeInfo}</div>
              )}
            </div>
            <div className="no">{item.no}</div>
          </div>
        );
      })}
    </div>
  );
}
