import { BaseRecord, BaseSubCollection, MediaStatus, Timestamp, ValidatedAddress } from './base';

export interface SpaceGuardian extends BaseSubCollection {
  uid: string;
  createdOn: Timestamp;
}

export interface SpaceMember extends BaseSubCollection {
  uid: string;
  createdOn: Timestamp;
}

export interface Alias {
  readonly address: string;
  readonly aliasId: string;
  readonly blockId: string;
  readonly mintedOn: Timestamp;
  readonly mintedBy: string;
}

export interface Space extends BaseRecord {
  name?: string;
  about?: string;
  open?: boolean;
  tokenBased?: boolean;
  minStakedValue?: number;
  github?: string;
  twitter?: string;
  discord?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  createdBy: string;
  totalGuardians: number;
  totalMembers: number;
  totalPendingMembers: number;
  validatedAddress?: ValidatedAddress;
  prevValidatedAddresses?: string[];
  vaultAddress?: string;
  guardians: {
    // Owner / from date
    [propName: string]: SpaceGuardian;
  };
  members: {
    // Owner / from date
    [propName: string]: SpaceMember;
  };
  collectionId?: string;
  claimed?: boolean;

  readonly ipfsMedia?: string;
  readonly ipfsMetadata?: string;
  readonly ipfsRoot?: string;
  readonly mediaStatus?: MediaStatus;
  readonly alias?: Alias;
}
