import { useState, useRef } from 'react';
import ComponentContainer from '../../components/ComponentContainer';
import { TimerContainer } from './styles';
import timerAssets from './imports';

export default function Timer() {
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef<number | NodeJS.Timeout | string | null>('');
  const { startIcon, stopIcon, resetIcon } = timerAssets;

  function startTimer() {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current as number);
    timerRef.current = null;
  }

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <ComponentContainer
      redirect="/"
      projectFiles={[
        {
          name: 'index',
          url: '../../../src/pages/Timer/index.tsx',
          type: 'tsx',
        },
        {
          name: 'styles',
          url: '../../../src/pages/Timer/index.tsx',
          type: 'ts',
        },
      ]}
      assets={timerAssets}
      folderDowloadName="Timer"
    >
      <TimerContainer>
        <div>
          <h1>{time}</h1>
          <div>
            <button onClick={startTimer}>
              <img src={startIcon.url} alt={startIcon.name} />
              <p>start</p>
            </button>
            <button onClick={stopTimer}>
              <img src={stopIcon.url} alt={stopIcon.name} />
              <p>stop</p>
            </button>
            <button onClick={resetTimer}>
              <img src={resetIcon.url} alt={resetIcon.name} />
              <p>Reset</p>
            </button>
          </div>
        </div>
      </TimerContainer>
    </ComponentContainer>
  );
}
