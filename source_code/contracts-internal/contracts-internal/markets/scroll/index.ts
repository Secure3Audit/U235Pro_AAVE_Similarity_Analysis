import {
  eEthereumNetwork,
  eScrollNetwork,
  IAaveConfiguration,
} from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  // strategyDAI,
  strategyUSDT,
  strategyUSDC,
  // strategyLINK,
  // strategyWBTC,
  strategyWETH,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const ScrollMarket: IAaveConfiguration = {
  ...AaveMarket,
  // Using testnet id as provider id
  ProviderId: 534351,
  WrappedNativeTokenSymbol: "WETH",
  MarketId: "U235 Scroll Market",
  ATokenNamePrefix: "U235 Scroll",
  StableDebtTokenNamePrefix: "U235 Scroll",
  VariableDebtTokenNamePrefix: "U235 Scroll",
  SymbolPrefix: "U235_Scroll",
  // disable incentives for U235
  DisableIncentives: true,
  TestnetMarket: false,
  ReservesConfig: {
    // DAI: strategyDAI,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    // LINK: strategyLINK,
    // WBTC: strategyWBTC,
    WETH: strategyWETH,
  },
  ReserveAssets: {
    [eScrollNetwork.testnet]: {
      // using mock tokens
      DAI: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
    },
    // using tokens on mainnet, do not using zero address
    [eScrollNetwork.mainnet]: {
      // DAI: ZERO_ADDRESS,
      USDT: "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
      USDC: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
      // LINK: ZERO_ADDRESS,
      // WBTC: ZERO_ADDRESS,
      WETH: "0x5300000000000000000000000000000000000004",
    },
  },
  ChainlinkAggregator: {
    // using mock oracles
    [eScrollNetwork.testnet]: {
      DAI: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
    },
    // using oracles on mainnet, do not using zero address
    [eScrollNetwork.mainnet]: {
      // DAI: ZERO_ADDRESS,
      USDC: "0x43d12Fb3AfCAd5347fA764EeAB105478337b7200",
      USDT: "0xf376A91Ae078927eb3686D6010a6f1482424954E",
      // LINK: ZERO_ADDRESS,
      // WBTC: ZERO_ADDRESS,
      WETH: "0x6bF14CB0A831078629D993FDeBcB182b21A8774C",
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDT", "USDC"],
    },
  },
  // Needs to be configured to a multisig
  // Using (POOL_ADMIN)[constants.ts] instead of `ReserveFactorTreasuryAddress`
  // ReserveFactorTreasuryAddress: {
  //   [eScrollNetwork.mainnet]: "",
  //   [eScrollNetwork.testnet]: "",
  // },
};

export default ScrollMarket;
