import { getAaveOracle } from "./../../helpers/contract-getters";
import { getAddressFromJson, waitForTx } from "../../helpers/utilities/tx";
import { task } from "hardhat/config";
import { FORK } from "../../helpers/hardhat-config-helpers";
import { eNetwork } from "../../helpers/types";
import { ORACLE_ID } from "../../helpers/deploy-ids";
import { getAddress } from "ethers/lib/utils";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  ConfigNames,
  getChainlinkOracles,
  getReserveAddresses,
  loadPoolConfig,
} from "../../helpers/market-config-helpers";
import { MARKET_NAME } from "../../helpers/env";
import { getPairsTokenAggregator } from "../../helpers/init-helpers";

task(`set-asset-oracle`).setAction(
  async ({}, { deployments, getNamedAccounts, ...hre }) => {
    const { poolAdmin } = await getNamedAccounts();
    const network = FORK ? FORK : (hre.network.name as eNetwork);
    const signer = await hre.ethers.provider.getSigner(poolAdmin);
    const poolConfig = await loadPoolConfig(MARKET_NAME as ConfigNames);

    const reserveAssets = await getReserveAddresses(poolConfig, network);
    const chainlinkAggregators = await getChainlinkOracles(poolConfig, network);

    const [assets, sources] = getPairsTokenAggregator(
      reserveAssets,
      chainlinkAggregators
    );

    const aaveOracle = await (
      await getAaveOracle(await getAddressFromJson(network, ORACLE_ID))
    ).connect(signer);

    await waitForTx(await aaveOracle.setAssetSources(assets, sources));

    for (let assetIndex in assets) {
      const asset = assets[assetIndex];
      const source = sources[assetIndex];
      console.log("  - Added aggregator:", source, "to asset:", asset);
    }
  }
);
