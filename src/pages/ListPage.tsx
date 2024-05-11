import List, { ListData } from '../components/List';
import { useNavigate } from 'react-router-dom';

export default function ListPage() {
  const navigate = useNavigate();

  const listData: ListData[] = [
    {
      date: '2023年12月1日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年11月30日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年12月1日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年12月1日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年12月1日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
  ];

  return (
    <div style={{ width: '1000px' }}>
      <List data={listData} />
      <div className="button" onClick={() => navigate('/timer')}>
        next
      </div>
    </div>
  );
}
