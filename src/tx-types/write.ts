import { type as Domain } from './per-ledger/domain-ledger';
import { type as Pool } from './per-ledger/pool-ledger';
import { type as Config } from './per-ledger/config-ledger';
import { type as Read } from './read';

export default {
  ...Domain,
  ...Pool,
  ...Config,
  SET_CONTEXT: '200',
};
