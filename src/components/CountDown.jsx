import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TimeSeparator from "../components/TimeSeparator";
import TimeCounter from "./TimeCounter";

import { getDateDifferenceFromNow } from "../model/date";

export default function CountDown() {
  const LEAVE_DATE = new Date("Aug 09, 2019 17:30:00");
  const [dateDifference, setDateDifference] = useState(
    getDateDifferenceFromNow(LEAVE_DATE)
  );

  useEffect(() => {
    const intervalId = setInterval(
      () => setDateDifference(getDateDifferenceFromNow(LEAVE_DATE)),
      1000
    );

    return () => clearInterval(intervalId);
  });

  return (
    <TimeStamp>
      <TimeCounter count={dateDifference.days} units="days" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.hours} units="hours" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.minutes} units="minutes" />
      <TimeSeparator />
      <TimeCounter count={dateDifference.seconds} units="seconds" />
    </TimeStamp>
  );
}

const TimeStamp = styled.div`
  display: flex;
`;
