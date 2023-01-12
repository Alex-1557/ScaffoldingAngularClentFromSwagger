export interface NetCrypt_Get {
  Text: string;
  KeyString: string;
}
export interface NetDeCrypt_Get {
  CipherText: string;
  KeyString: string;
}
export interface SqlCrypt_Get {
  Text: string;
  KeyString: string;
}
export interface SqlDeCrypt_Get {
  HexCipherText: string;
  KeyString: string;
}
export interface UpdateDecryptedPass_Get {
  PassType: number;
  OldPass: string;
  NewPass: string;
}
export interface CheckDecryptPass_Post {
  serverDecryptPass: string;
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  dockerRegistryDecryptPass: string;
  vmConnectionUserDecryptPass: string;
}
export interface GetRandomPassword_Get {
  Len: number;
}
export interface GetRandomName_Get {
  Len: number;
}
