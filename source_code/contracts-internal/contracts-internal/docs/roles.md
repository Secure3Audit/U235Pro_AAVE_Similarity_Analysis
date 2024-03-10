# Roles

## Deployer

- Using index0 account of `MNEMONIC`
- Permissions
  - Deploying all contracts to blockchain
  - Owner of `PoolAddressesProvider`
    - `PoolAddressesProvider`: Main registry of addresses part of or connected to the protocol, including permissioned roles
    - [No] Multi-sig can be used for the first deployment?
    - [Yes] Can transfer ownership after deploying to mainnet?

## AclAdmin

- Using index0 account of `MNEMONIC`
- Permissions
  - Admin of `ACLManager`: The address that can add/remove/update the ACLManager
- `ACLManager`:
  - Access Control List Manager. Main registry of system roles and permissions

## EmergencyAdmin

- Using index0 account of `MNEMONIC`
- Under `ACLManager`
- Permissions
  - Set all reserves to pause/unpause in [PoolConfigurator.sol]
- [Yes] Multi-sig can be used for the first deployment?
- [Yes] Can transfer ownership after deploying to mainnet?

## PoolAdmin

- Using index0 account of `MNEMONIC`
- Under `ACLManager`
- Permissions
  - update AToken, variable/fixed DebtToken, rescue non-reserve, dropReserve etc regarding Pool.
- [No] Multi-sig can be used for the first deployment?
- [No] Can transfer ownership after deploying to mainnet?
  - To update the pool admin, use the `ACLManager.addPoolAdmin` function.

## AddressesProviderRegistryOwner

- Using index0 account of `MNEMONIC`
- Permissions
  - Owner of `PoolAddressesProviderRegistry`
    - `PoolAddressesProviderRegistry`: Used for indexing purposes of Aave protocol's markets
- [No] Multi-sig can be used for the first deployment?
- [Yes] Can transfer ownership after deploying to mainnet?

## [POOL_ADMIN](../helpers/constants.ts#L144)

- Configuring in [constants.ts](../helpers/constants.ts#L144)
- Permissions
  - Owner of `AaveEcosystemReserveController`
  - `AaveEcosystemReserveController` is funds admin of `AaveEcosystemReserveV2`
    - `AaveEcosystemReserveV2` stores ERC20 tokens of an ecosystem reserve(protocol's interests ...)
- [Yes] Multi-sig can be used for the first deployment?
- [Yes] Can transfer ownership after deploying to mainnet?

## [EMERGENCY_ADMIN](../helpers/constants.ts#L154)

- Configuring in [instants.ts](../helpers/constants.ts#L154)
- Not used for Aave v3 Core

## TreasuryProxyAdmin

- Using index1 account of `MNEMONIC`
- Not used for Aave v3 Core

## IncentivesProxyAdmin

- Using index1 account of `MNEMONIC`
- Not used for Aave v3 Core

## IncentivesEmissionManager

- Using index0 account of `MNEMONIC`
- Not used for Aave v3 Core
- Permissions
  - Owner of `EmissionManager`: can update emissionAdmin, address of rewardController

## IncentivesRewardsVault

- Using index0 account of `MNEMONIC`
- Not used for Aave v3 Core
- Permissions
  - Owner of `PullRewardsTransferStrategy`
    - `PullRewardsTransferStrategy`:Transfer strategy that pulls ERC20 rewards from an external account to the user address.
