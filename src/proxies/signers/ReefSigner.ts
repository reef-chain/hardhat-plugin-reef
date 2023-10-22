import { Signer } from "@reef-chain/evm-provider";

import { ProxySigner } from "./ProxySigner";

// Class is never used and is defined just for type testing purposes
export default class ReefSigner extends Signer implements ProxySigner {}
