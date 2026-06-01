import {ACTIVE_PRESET, PresetName} from "@lodestar/params";
import {chainConfig as mainnet} from "./configs/mainnet.js";
import {chainConfig as minimal} from "./configs/minimal.js";
import {gnosisChainConfig as gnosis} from "./networks/gnosis.js";
import {ChainConfig} from "./types.js";

let defaultChainConfig: ChainConfig;

switch (ACTIVE_PRESET) {
  case PresetName.minimal:
    defaultChainConfig = minimal;
    break;
  case PresetName.mainnet:
    defaultChainConfig = mainnet;
    break;
  // Under the gnosis preset the default config must also be gnosis-based (PRESET_BASE=gnosis),
  // otherwise createChainConfig throws on the preset mismatch (used by spec tests and elsewhere).
  case PresetName.gnosis:
    defaultChainConfig = gnosis;
    break;
  default:
    defaultChainConfig = mainnet;
}

export {defaultChainConfig};
