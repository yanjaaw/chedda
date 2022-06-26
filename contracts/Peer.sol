pragma solidity ^0.5.0;

/*
Borrower flow:
Connect Wallet to get access to form
Form to create first name or pseudonym
Second form to create a borrowing wish that includes 1. amount (capped based on borrower level) 2. want 3. why (optional)

When getting funded, transaction is added to their profile.

Transactions are noted as a Gotten or Given back status.

When paid back this increases their borrower level.

When adding Livepeer updates or upload images / other docs for progress on STORJ, this increases their borrower level too.

Investor flow:
Can peruse borrowers

If wanting to fund has to connect wallet, gets access to form
Form to create first name or pseudonym

Upon pressing fund gets transaction added to their profile.

Transactions are noted as Given or Gotten Back status.

Within Peer contract, investors have the option to verify use case when borrowers post an update.

More funding = higher social credit level.
*/