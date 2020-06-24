import React from 'react';
import styled from 'styled-components';
import { checkStatus } from '../../utils/status';

const Flag = styled.span`
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1;
  padding: 2px 4px;

  ${({ status }) => {
    return status === 'stable'
      ? `
        background: #2d5883;
    `
      : status === 'wip'
      ? `
        background: #e3cb58;
    `
      : /*bêta*/ `
        background: #e35876;
    `;
  }}
`;

const StatusFlag = ({ status, ...rest }) => {
  if (!status) return false;
  const authorizedStatus = checkStatus(status);
  if (!authorizedStatus) return false;
  return (
    <Flag {...rest} status={authorizedStatus}>
      {authorizedStatus}
    </Flag>
  );
};

export default StatusFlag;
