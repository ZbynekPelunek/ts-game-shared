import { Types, Document } from 'mongoose';

import { Account } from '../../../../backend/src/interfaces/account';

export interface AccountDocument
  extends Account,
    Document<Types.ObjectId, {}, Account> {}
