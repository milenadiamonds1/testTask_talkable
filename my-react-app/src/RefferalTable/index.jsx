import React from 'react';
import ReferralElement from '../RefferalElement';
import {
  TableWrapper,
  StyledTable,
  TableData,
} from './styles';
  
const ReferralTable = () => {
  const referrals = [
    {
      id: 1,
      date: '06/12/2020 at 7:13 PM PDT',
      amount: '$120.00',
      advEmail: 'autouser2396@gmail.com',
      frEmail: 'fr58272@gmail.com',
      status: 'Pending',
      statusDescr: 'Passed fraud checks',
    },
    {
      id: 2,
      date: '07/10/2020 at 4:05 AM PDT',
      amount: '$100.00',
      advEmail: 'ad0379118142@gmail.com',
      frEmail: 'fr0379118142@gmail.com',
      status: 'Flagged',
      statusDescr: 'Marked as fraud',
    },
    {
      id: 3,
      date: '06/09/2020 at 12:42 PM PDT',
      amount: '$28.00',
      advEmail: 'ad56991@gmail.com',
      frEmail: 'fr94250@gmail.com',
      status: 'Approved',
      statusDescr: 'Passed fraud checks',
    },
    {
      id: 4,
      date: '08/07/2020 at 4:20 AM PDT',
      amount: '$100.00',
      advEmail: 'user.to.be.blocked92187@gmail.com',
      frEmail: 'user.to.be.blocked2682@gmail.com',
      status: 'Blocked',
      statusDescr: 'Marked as fraud',
    },
    {
      id: 5,
      date: '06/09/2020 at 2:08 AM PDT',
      amount: '$100.00',
      advEmail: 'ad0693677382@gmail.com',
      frEmail: 'fr0693677382@gmail.com',
      status: 'Voided',
      statusDescr: 'Marked as fraud',
    },
  ];
  const headers = [
    {
      name: 'Refferal event',
    },
    {
      name: 'Advocate',
    },
    {
      name: 'Friend',
    },
    {
      name: 'Refferal status',
    },
  ];

  return (
    <TableWrapper>
      <h1>Refferals - 345</h1>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header) => (
              <TableData>{header.name}</TableData>
            ))}
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral) => (
            <ReferralElement key={referral.id} referral={referral} />
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default ReferralTable;
