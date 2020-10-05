import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faMinus,
  faPlay,
  faPause,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import Controls from './Controls';
import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faPlus, faMinus, faPlay, faPause, faUndo);

const DEFAULT_BREAK_MINUTE = 5;
const DEFAULT_SESSION_MINUTE = 25;
const DEFAULT_TIMELEFT_SECONDS = 25 * 60;
const MAX_MINUTE = 60;
const MIN_MINUTE = 1;
const SESSION_LABEL = 'Session';
const BREAK_LABEL = 'Break';

function App() {
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_MINUTE);
  const [sessionTime, setSessionTime] = useState(DEFAULT_SESSION_MINUTE);
  const [timerLabel, setTimerLabel] = useState(SESSION_LABEL);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIMELEFT_SECONDS);
  const [isActive, setIsActive] = useState(false);

  const playBeep = () => {
    const beep = document.getElementById('beep');
    beep.play();
  };

  const stopBeep = () => {
    const beep = document.getElementById('beep');
    beep.currentTime = 0;
    beep.pause();
  };

  useEffect(() => {
    let id = null;

    if (isActive && timeLeft !== 0) {
      id = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0 && timerLabel === SESSION_LABEL) {
      playBeep();
      id = setTimeout(() => {
        setTimerLabel(BREAK_LABEL);
        setTimeLeft(breakTime * 60);
      }, 1000);
    } else if (isActive && timeLeft === 0 && timerLabel === BREAK_LABEL) {
      playBeep();
      id = setTimeout(() => {
        setTimerLabel(SESSION_LABEL);
        setTimeLeft(sessionTime * 60);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [breakTime, isActive, sessionTime, timeLeft, timerLabel]);

  const onResetButtonClick = () => {
    setBreakTime(DEFAULT_BREAK_MINUTE);
    setSessionTime(DEFAULT_SESSION_MINUTE);
    setTimerLabel(SESSION_LABEL);
    setTimeLeft(DEFAULT_TIMELEFT_SECONDS);
    setIsActive(false);
    stopBeep();
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time.toString()}` : time.toString();
  };

  const secondsToString = (seconds) => {
    const minute = formatTime(Math.floor(seconds / 60));
    const second = formatTime(seconds % 60, 10);

    return `${minute}:${second}`;
  };

  const calculateTime = (minute) => {
    if (minute < MIN_MINUTE) {
      return MIN_MINUTE;
    }
    if (minute > MAX_MINUTE) {
      return MAX_MINUTE;
    }
    return minute;
  };

  const onBreakButtonClick = (minute) => {
    setBreakTime(calculateTime(breakTime + minute));
  };

  const onSessionButtonClick = (minute) => {
    const newSessionTime = calculateTime(sessionTime + minute);
    setSessionTime(newSessionTime);
    setTimeLeft(newSessionTime * 60);
  };

  const onStartStopButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Pomodoro Clock</h1>
        </Col>
      </Row>
      <Row>
        <Controls type="break" time={breakTime} onClick={onBreakButtonClick} />
        <Controls
          type="session"
          time={sessionTime}
          onClick={onSessionButtonClick}
        />
      </Row>
      <Row>
        <Timer
          timerLabel={timerLabel}
          timeLeft={timeLeft}
          isActive={isActive}
          secondsToString={secondsToString}
          onStartStopButtonClick={onStartStopButtonClick}
          onResetButtonClick={onResetButtonClick}
        />
      </Row>
    </Container>
  );
}

export default App;
