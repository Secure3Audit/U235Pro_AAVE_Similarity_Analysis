# Deployment

## Deploy contracts

### Install

```
yarn
```

### Copy .env.example to .env and update the `MNEMONIC`

- You can see the accounts used with multiple roles in [DEFAULT_NAMED_ACCOUNTS](../helpers/constants.ts#L152)
- Please refer to the documentation on roles in [roles.md](./roles.md)

### Add network provider if needed

> Should be updated by developers

- update network provider url
  - Add `NETWORKS_RPC_URL`,`LIVE_NETWORKS` in [helpers](../helpers/hardhat-config-helpers.ts)
  - add `eNetwork` in [types](../helpers/types.ts)
- update `networks` in [hardhat.config](../hardhat.config.ts)
- update `WRAPPED_NATIVE_TOKEN_PER_NETWORK` in [constants](../helpers/constants.ts)

### Create market if needed

> Should be updated by developers

- create market and update configureations in [markets](../markets/)
- update `ConfigNames` in [`market-config-helpers`](../helpers/market-config-helpers.ts#L42)
- update `loadPoolConfig` ind [`market-config-helpers`](../helpers/market-config-helpers.ts#L99)

### Update oracle

- update `chainlinkAggregatorProxy` and `chainlinkEthUsdAggregatorProxy` in [constants](../helpers/constants.ts)

## Deploy

> Before deploying contracts to mainnet, you should try to deploy contracts to Hardhat network locally first.

**Supported networks**

- zkatana
- scrolltest
- scrollmain
- goerli

**Supported markets**

- L2X
- Scroll

```shell
# deploy to hardhat with `L2X` market
HARDHAT_NETWORK=hardhat MARKET_NAME=L2X yarn deploy

# deploy to zkatana with `L2X` market
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn deploy

# deploy to scrolltest with `Scroll` market
HARDHAT_NETWORK=scrolltest MARKET_NAME=Scroll yarn deploy

# deploy to Scroll mainnet with `Scroll` market
HARDHAT_NETWORK=scrollmain MARKET_NAME=Scroll yarn deploy
```

### QA

> `SocketError: other side closed`?
>
> please rerun the deployment script, it will continue current process.

## Deploy new assets on testnet

1. Update configurations in [market file](../markets/l2x/index.ts)

- Add new reserve for `ReservesConfig`,`ReserveAssets`,`ChainlinkAggregator`

2. Run the following command:

```
# Deploy market
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn deploy --tags market

# Redeploy aave oracle and init
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn hardhat set-asset-oracle

# Redeploy aave oracle and init
HARDHAT_NETWORK=goerli MARKET_NAME=Scroll yarn hardhat set-asset-oracle
HARDHAT_NETWORK=scrolltest MARKET_NAME=Scroll yarn hardhat set-asset-oracle
```

## Setup e-mode

```
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn hardhat setup-e-modes
```

## Setup isolation-mode

```
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn hardhat setup-isolation-mode
```

## Setup debt-ceiling

```
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn hardhat setup-debt-ceiling
```

## Transfer ownership

### Transfer [POOL_ADMIN](../helpers/constants.ts#L144) ownership

```
HARDHAT_NETWORK=${network} yarn hardhat transfer-ownership --address ${address} --admin ${newAdmin}
```
