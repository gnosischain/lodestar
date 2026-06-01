import path from "node:path";
import {fileURLToPath} from "node:url";
import specTestVersions from "../spec-tests-version.json" with {type: "json"};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Under the gnosis preset, use the Gnosis-preset reference tests published by
// gnosischain/consensus-specs (downloaded into their own output dir) instead of the standard
// Ethereum consensus-specs tests. The env var is read directly rather than ACTIVE_PRESET to avoid
// importing @lodestar/params here, which would freeze the preset before test setup runs.
const consensusSpecsTests =
  process.env.LODESTAR_PRESET === "gnosis"
    ? specTestVersions.gnosisConsensusSpecsTests
    : specTestVersions.ethereumConsensusSpecsTests;

export const ethereumConsensusSpecsTests = {
  ...consensusSpecsTests,
  outputDir: path.join(__dirname, "../../", consensusSpecsTests.outputDirBase),
};

export const blsSpecTests = {
  ...specTestVersions.blsSpecTests,
  outputDir: path.join(__dirname, "../../", specTestVersions.blsSpecTests.outputDirBase),
};
