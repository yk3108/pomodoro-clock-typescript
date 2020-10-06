// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Controls.css';

type Props = {
  type: string;
  time: number;
  onClick: (minute: number) => void;
};

const Controls: React.FC<Props> = (props: Props) => {
  const { type, time, onClick } = props;
  const labelType = type.charAt(0).toUpperCase() + type.slice(1);
  const variant = 'outline-primary';

  return (
    <Col>
      <div id={`${type}-label`} className="label m-1">
        {`${labelType} Length`}
      </div>
      <Button
        id={`${type}-decrement`}
        variant={variant}
        onClick={() => onClick(-1)}
      >
        <FontAwesomeIcon icon="minus" />
      </Button>
      <span id={`${type}-length`} className="length">
        {time}
      </span>
      <Button
        id={`${type}-increment`}
        variant={variant}
        onClick={() => onClick(1)}
      >
        <FontAwesomeIcon icon="plus" />
      </Button>
    </Col>
  );
};

export default Controls;
