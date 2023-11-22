import styled from 'styled-components';

export const ReferralData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  text-align: left;

  p {
    margin: 10px 0;
  }
`;

export const ReferralPrice = styled.p`
  font-weight: 700;
`;

export const ReferralPosition = styled.p`
  font-weight: 400;
`;

export const ReferralDate = styled.p`
  color: gray;
  font-size: 14px;
`;

export const ReferralEmail = styled.p`
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ReferralStatusDescr = styled.p`
  color: ${(props) => props.statusColor || 'black'};
  font-size: 14px;
`;