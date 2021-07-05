import React from 'react';
import { useFela } from 'react-fela';
import { progressBar, progressBarBg, progressMeter } from './style';

const ProgressBar = ({ progress }: { progress: number }) => {
  const { css } = useFela({ progress });

  return (
    <div className={css(progressBar)}>
      <div className={css(progressBarBg)}></div>
      <div className={css(progressMeter)}></div>
    </div>
  );
};

export default ProgressBar;
