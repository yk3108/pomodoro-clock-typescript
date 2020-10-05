import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import beepUrl from '../sound/beep.mp3';
import './Timer.css';

export default function Timer(props) {
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
              onClick={() => onStartStopButtonClick()}
            >
              <FontAwesomeIcon icon={isActive ? 'pause' : 'play'} />
            </Button>
            <Button
              id="reset"
              className="m-1"
              variant="outline-primary"
              onClick={() => onResetButtonClick()}
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
}

Timer.propTypes = {
  timerLabel: PropTypes.string.isRequired,
  timeLeft: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  secondsToString: PropTypes.func.isRequired,
  onStartStopButtonClick: PropTypes.func.isRequired,
  onResetButtonClick: PropTypes.func.isRequired,
};
