// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import beepUrl from '../sound/beep.mp3';
import './Timer.css';

type Props = {
  timerLabel: string;
  timeLeft: number;
  isActive: boolean;
  secondsToString: (timeLeft: number) => string;
  onStartStopButtonClick: () => void;
  onResetButtonClick: () => void;
};

const Timer: React.FC<Props> = (props: Props) => {
  const {
    timerLabel,
    timeLeft,
    isActive,
    secondsToString,
    onStartStopButtonClick,
    onResetButtonClick,
  } = props;

  return (
    <Col>
      <Container className="timer-container">
        <Row className="row1">
          <Col className="align-self-center">
            <div id="timer-label" className="timer-label">
              {timerLabel}
            </div>
          </Col>
        </Row>
        <Row className="row2">
          <Col className="align-self-center">
            <div id="time-left" className="time-left">
              {secondsToString(timeLeft)}
            </div>
          </Col>
        </Row>
        <Row className="row3">
          <Col className="align-self-center button-container">
            <Button
              id="start_stop"
              className="m-1"
              variant="outline-primary"
              onClick={onStartStopButtonClick}
            >
              <FontAwesomeIcon icon={isActive ? 'pause' : 'play'} />
            </Button>
            <Button
              id="reset"
              className="m-1"
              variant="outline-primary"
              onClick={onResetButtonClick}
            >
              <FontAwesomeIcon icon="undo" />
            </Button>
          </Col>
        </Row>
      </Container>
      <audio id="beep" src={beepUrl}>
        <track kind="captions" />
      </audio>
    </Col>
  );
};

export default Timer;
