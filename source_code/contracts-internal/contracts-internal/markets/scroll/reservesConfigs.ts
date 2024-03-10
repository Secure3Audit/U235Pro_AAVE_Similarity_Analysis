import { eContractid, IReserveParams } from "../../helpers/types";

import {
  rateStrategyVolatileOne,
  rateStrategyStableOne,
  rateStrategyStableTwo,
} from "../aave/rateStrategies";

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "7700",
  liquidationThreshold: "8000",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "6000000",
  borrowCap: "4500000",
  debtCeiling: "0",
  borrowableIsolation: true,
};

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyStableOne,
  baseLTVAsCollateral: "7700",
  liquidationThreshold: "8000",
  liquidationBonus: "10500",
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500",
  supplyCap: "6000000",
  borrowCap: "4500000",
  debtCeiling: "0",
  borrowableIsolation: true,
};

export const strategyWETH: IReserveParams = {
    strategy: rateStrategyVolatileOne,
    baseLTVAsCollateral: "7500",
    liquidationThreshold: "7800",
    liquidationBonus: "10600",
    liquidationProtocolFee: "1000",
    borrowingEnabled: true,
    stableBorrowRateEnabled: false,
    flashLoanEnabled: true,
    reserveDecimals: "18",
    aTokenImpl: eContractid.AToken,
    reserveFactor: "2000",
    supplyCap: "2000",
    borrowCap: "1500",
    debtCeiling: "0",
    borrowableIsolation: false,
  };