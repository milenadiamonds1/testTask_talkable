import React from 'react';
import {
  ReferralData,
  ReferralDate,
  ReferralPrice,
  ReferralEmail,
  ReferralPosition,
  ReferralStatusDescr,
} from './styles';

const getStatusDescrColor = (statusDescr) => {
  const colorMap = {
    'Passed fraud checks': 'gray',
    'Marked as fraud': 'red',
  };

  return colorMap[statusDescr] || 'black';
};

const ReferralElement = ({ referral }) => (
  <tr key={referral.id}>
    <ReferralData>
      <div>
        <p>Purchase</p>
        <ReferralDate>{referral.date}</ReferralDate>
        <ReferralPrice>{referral.amount}</ReferralPrice>
      </div>
    </ReferralData>
    <ReferralData>
      <div>
        <ReferralEmail>{referral.advEmail}</ReferralEmail>
        <ReferralPosition>Advocate</ReferralPosition>
      </div>
    </ReferralData>
    <ReferralData>
      <div>
        <ReferralEmail>{referral.frEmail}</ReferralEmail>
        <ReferralPosition>Friend</ReferralPosition>
      </div>
    </ReferralData>
    <ReferralData>
      <div>
        <p>{referral.status}</p>
        <ReferralStatusDescr
          statusColor={getStatusDescrColor(referral.statusDescr)}
        >
          {referral.statusDescr || 'N/A'}
        </ReferralStatusDescr>
      </div>
    </ReferralData>
  </tr>
);

export default ReferralElement;
