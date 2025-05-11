import { Types } from 'mongoose';
import { CurrencyId } from '../../currency/currency';
import { CurrencyDTO } from '../../currency/currencyDTOs';

export interface CharacterCurrency {
  currencyId: CurrencyId;
  amount: number;
  characterId: Types.ObjectId;
  currency?: Pick<CurrencyDTO, '_id' | 'cap' | 'desc' | 'label'>;
}
