import {
  eAstarLayer2Network,
  eAvalancheNetwork,
  IAaveConfiguration,
} from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  strategyDAI,
  strategyWETH,
  strategyUSDT,
} from "../aave/reservesConfigs";
import {
  strategyLINK,
  strategyUSDC,
  strategyAAVE,
  strategyWBTC,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const L2xMarket: IAaveConfiguration = {
  ...AaveMarket,
  // Using testnet id as provider id
  ProviderId: 1261120,
  WrappedNativeTokenSymbol: "WETH",
  MarketId: "L2X Aave Market",
  ATokenNamePrefix: "",
  StableDebtTokenNamePrefix: "",
  VariableDebtTokenNamePrefix: "",
  SymbolPrefix: "",
  // disable incentives for L2X
  DisableIncentives: true,
  TestnetMarket: false,
  ReservesConfig: {
    DAI: strategyDAI,
    LINK: strategyLINK,
    // WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
  },
  ReserveAssets: {
    [eAstarLayer2Network.zkatana]: {
      // using mock tokens
      DAI: ZERO_ADDRESS,
      // USDT: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      LINK: "0x6b7a3ddC5b854f25b6951B6e3d64923f73F08b10",
      // WBTC: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
    },
    // using tokens on mainnet, do not using zero address
    [eAstarLayer2Network.main]: {
      DAI: ZERO_ADDRESS,
      // USDT: ZERO_ADDRESS,
      // LINK: ZERO_ADDRESS,
      // WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
    },
  },
  ChainlinkAggregator: {
    [eAstarLayer2Network.zkatana]: {
      DAI: ZERO_ADDRESS,
      // USDC: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      // WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
    },
    // using oracles on mainnet, do not using zero address
    [eAstarLayer2Network.main]: {
      DAI: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      AAVE: ZERO_ADDRESS,
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["DAI", "USDT"],
    },
  },
};

export default L2xMarket;
