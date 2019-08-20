import { AccountModel } from '../../../models/account/account'
import {
  MActor,
  MActorAccountChannelId,
  MActorAPI,
  MActorAudience,
  MActorDefault,
  MActorDefaultLight,
  MActorId,
  MActorServer,
  MActorSummary,
  MActorSummaryFormattable,
  MActorUrl,
  MActorFormattable
} from './actor'
import { FunctionProperties, PickWith } from '../../utils'
import { MAccountBlocklistId } from './account-blocklist'
import { MChannelDefault } from '@server/typings/models'

type Use<K extends keyof AccountModel, M> = PickWith<AccountModel, K, M>

// ############################################################################

export type MAccount = Omit<AccountModel, 'Actor' | 'User' | 'Application' | 'VideoChannels' | 'VideoPlaylists' |
  'VideoComments' | 'BlockedAccounts'>

// ############################################################################

// Only some attributes
export type MAccountId = Pick<MAccount, 'id'>
export type MAccountUserId = Pick<MAccount, 'userId'>

// Only some Actor attributes
export type MAccountUrl = Use<'Actor', MActorUrl>
export type MAccountAudience = Use<'Actor', MActorAudience>

export type MAccountIdActor = MAccountId &
  Use<'Actor', MActorAccountChannelId>

export type MAccountIdActorId = MAccountId &
  Use<'Actor', MActorId>

// ############################################################################

// Default scope
export type MAccountDefault = MAccount &
  Use<'Actor', MActorDefault>

// Default with default association scopes
export type MAccountDefaultChannelDefault = MAccount &
  Use<'Actor', MActorDefault> &
  Use<'VideoChannels', MChannelDefault[]>

// We don't need some actors attributes
export type MAccountLight = MAccount &
  Use<'Actor', MActorDefaultLight>

// ############################################################################

// Full actor
export type MAccountActor = MAccount &
  Use<'Actor', MActor>

// Full actor with server
export type MAccountServer = MAccount &
  Use<'Actor', MActorServer>

// ############################################################################

// For API

export type MAccountSummary = FunctionProperties<MAccount> &
  Pick<MAccount, 'id' | 'name'> &
  Use<'Actor', MActorSummary>

export type MAccountSummaryBlocks = MAccountSummary &
  Use<'BlockedAccounts', MAccountBlocklistId[]>

export type MAccountAPI = MAccount &
  Use<'Actor', MActorAPI>

// ############################################################################

// Format for API or AP object

export type MAccountSummaryFormattable = FunctionProperties<MAccount> &
  Pick<MAccount, 'id' | 'name'> &
  Use<'Actor', MActorSummaryFormattable>

export type MAccountFormattable = FunctionProperties<MAccount> &
  Pick<MAccount, 'id' | 'name' | 'description' | 'createdAt' | 'updatedAt' | 'userId'> &
  Use<'Actor', MActorFormattable>
