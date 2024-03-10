# Log

## 20240205

Deploy UI helper to Scroll testnet:

```
HARDHAT_NETWORK=scrolltest yarn hardhat deploy-UiPoolDataProvider
```

Results:

```
$ npx hardhat deploy-UiPoolDataProvider

- UiPoolDataProviderV3 price aggregator: 0xC073d1E7041DA89F0061Cc70cB0D483c89B1C38F

- UiPoolDataProviderV3 eth/usd price aggregator: 0xC073d1E7041DA89F0061Cc70cB0D483c89B1C38F

- UiPoolDataProviderV3 deployment
UiPoolDataProviderV3: 0xe0F2F78E1BF93f8e8B31D1D5C0bDdF74Fb9D01b9
Network: scrolltest
```

## 20240204

```
# Command
HARDHAT_NETWORK=scrolltest MARKET_NAME=Scroll yarn deploy
```

Results:

```
Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│               BorrowLogic               │ '0x0D96a912839589E46C8810E3C8651E6b43b9dDfa' │
│               EModeLogic                │ '0x0B739AeceadD8002FFC5c66Be7a637E47e1ea9a6' │
│            LiquidationLogic             │ '0xeC4279CEc1e5393E0b57c5295806e6013fF3DD8b' │
│      PoolAddressesProviderRegistry      │ '0x626c78d7412C83F3477a9A951F9e7eE67eC48F3b' │
│               SupplyLogic               │ '0x6EDd21f5e3B77b1C42cacD8b724Ef139a06521DC' │
│               BridgeLogic               │ '0x9d7F9eb4d6B9a2Ca11f9a9639Ebc7AA4b7004d50' │
│            ConfiguratorLogic            │ '0xD184F078c8791149525662555b25EB9477C28794' │
│             FlashLoanLogic              │ '0x9f15254A147D72462121490135A44e942cda8c80' │
│                PoolLogic                │ '0x502F675a8e56Cf9d758697F75097254ab4d679B3' │
│              TreasuryProxy              │ '0xB4a5e9fE2Ca78c981C635362164fc08487533674' │
│           Treasury-Controller           │ '0x7372D5f238897C63fa62800381E628a4CFD23d4b' │
│         Treasury-Implementation         │ '0x4CCEE2A40520d08F26e1921087Bba918354A1Ecc' │
│              Faucet-Scroll              │ '0xFcfFCD8d9ba759d1A9028DFd66C7850b8A916652' │
│      PoolAddressesProvider-Scroll       │ '0xE1250ce777Aa2d0088e36443Ea83B80b1B514D38' │
│         PoolDataProvider-Scroll         │ '0xC19A24470b3993Dd2440ABFBc65bDf757372cc7C' │
│    DAI-TestnetPriceAggregator-Scroll    │ '0xb8771dcE79d460aCcBaE75D02ad395d7427Edd72' │
│   USDT-TestnetPriceAggregator-Scroll    │ '0xdFcF4E663D19675e4F73a27DBb42DA797B2524Cc' │
│   USDC-TestnetPriceAggregator-Scroll    │ '0x0669898CeC248895d63F3FDFfadA7a100D4907eD' │
│   LINK-TestnetPriceAggregator-Scroll    │ '0x59df8ACc223622d244de32112d4561A009C25Fe5' │
│   WBTC-TestnetPriceAggregator-Scroll    │ '0xa0A8E760d5ea95d56d4Dd02Db34df50c3469aEC7' │
│   WETH-TestnetPriceAggregator-Scroll    │ '0x21BC2f1b443bF0c6511698f65542e554613E3953' │
│           Pool-Implementation           │ '0x6E44b1E222DF74721B7B782dFfd8CBb98A2664E1' │
│     PoolConfigurator-Implementation     │ '0xaeB74587d0Ef01978B26A1Ae6109452925A14E7F' │
│           ReservesSetupHelper           │ '0xBB35E4Ed61650336FF80613f0dc58ee317eA053B' │
│            ACLManager-Scroll            │ '0x6306074c656D2295bb77c473223B0DDaa2237dA2' │
│            AaveOracle-Scroll            │ '0x60B29E79C1B32429B4A25BA55D54d5B4310e6C29' │
│            Pool-Proxy-Scroll            │ '0x920be440728A0B0F04D696DBeCAD1efac0b14B21' │
│      PoolConfigurator-Proxy-Scroll      │ '0xb56489B000dB55E06DcE9237011Fde9c04d4d80e' │
│              AToken-Scroll              │ '0x1017545587D54e5C163176DE5A4ecf9Fe171d67d' │
│      DelegationAwareAToken-Scroll       │ '0xfF87BeEf29d4B21323902BF9fCc29B1c46Fc3574' │
│         StableDebtToken-Scroll          │ '0xb82ef38a8Ba64e1Beb0cc4e5155116a32B65a431' │
│        VariableDebtToken-Scroll         │ '0xA59f904ABBaA06eD495814212a025dE0ecC91C8D' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x45A2dAd70302661E6c8955d98902E5e755CD4513' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x4a72a4D222408E0BdB0483C75964E3cAE4405d5C' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0x20eac4D82f840A7582Fb2F87C01b32575dE4D2B5' │
│            DAI-AToken-Scroll            │ '0x82433af6aDC51E42D0c6e8C0B088bF960fAba30f' │
│      DAI-VariableDebtToken-Scroll       │ '0x32fd46f2e9A0d39A7B1282aE7be0f2eC55776ec7' │
│       DAI-StableDebtToken-Scroll        │ '0xC0f186F330296dde213BB8d7cb8831aa24efdCc4' │
│           USDT-AToken-Scroll            │ '0xEF14266A1A4Ff007A63B50DF8c7194191ec05712' │
│      USDT-VariableDebtToken-Scroll      │ '0x52eEe6F8d002dB30fAaa951e66c4e4Adf45308c3' │
│       USDT-StableDebtToken-Scroll       │ '0x87771bC81a6D1FAb51ad3D94A71C50271c2E6C9B' │
│           USDC-AToken-Scroll            │ '0x5E3e1a34d727f2F541BC6b8e034e2B6099194bcd' │
│      USDC-VariableDebtToken-Scroll      │ '0x1D05CEdcAFfcd2d60F5eeb093F40Db6f4a03460c' │
│       USDC-StableDebtToken-Scroll       │ '0x799e1140E17a3C3a8e5556E7C30961ec43240F31' │
│           LINK-AToken-Scroll            │ '0x4009D45Bac701D7128e552Ba6130A55aFD85D412' │
│      LINK-VariableDebtToken-Scroll      │ '0x2601A7925F71829e4b9Ba2188a89624813ce980c' │
│       LINK-StableDebtToken-Scroll       │ '0xf586aE40ceF1d3A40650E8326d19C1917591e5C7' │
│           WBTC-AToken-Scroll            │ '0xbcA510A2bd51F468fE5Cf2c2C100584f343D4bdE' │
│      WBTC-VariableDebtToken-Scroll      │ '0x3634fE1122552FD276182055D2BdCe8cC5e04219' │
│       WBTC-StableDebtToken-Scroll       │ '0x8a28b241E86fef706030DB16fAB4AFd77F9d3373' │
│           WETH-AToken-Scroll            │ '0xDD463f551A0AbA8395327330a177F2AEB1c706e4' │
│      WETH-VariableDebtToken-Scroll      │ '0xCb4fa09ca4408F2CD0ecF106c1b8B21Da0FE9eC1' │
│       WETH-StableDebtToken-Scroll       │ '0x2Cc0782C6EB6A3B7540DC30ae1489832F2340543' │
│          MockFlashLoanReceiver          │ '0xA4EfBD97A1dDc225A66517B2F5aCD1DFAa1b54e0' │
│          WrappedTokenGatewayV3          │ '0x8Abf9d89687C1eCa98a79f13861AfC6e353342e6' │
│          WalletBalanceProvider          │ '0x173968d25446a8D6f6279f478524cbE2E062D5D0' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌──────────────────────────────────┬──────────────────────────────────────────────┐
│             (index)              │                   address                    │
├──────────────────────────────────┼──────────────────────────────────────────────┤
│ DAI-TestnetMintableERC20-Scroll  │ '0x93D2F3CB162679f8167748b685D0319db24B8e36' │
│ USDT-TestnetMintableERC20-Scroll │ '0xc00d332124825dD4E15bC0C2F4A14A5bA364d447' │
│ USDC-TestnetMintableERC20-Scroll │ '0x265Ce626D44fdE75990eCC7f6D2F59c1bbDe752b' │
│ LINK-TestnetMintableERC20-Scroll │ '0x6dcC167449c834AF2434834eAde887088E0F7BEd' │
│ WBTC-TestnetMintableERC20-Scroll │ '0xDc1BC20AA974606F2d0c98704B74402e3E4D3951' │
│ WETH-TestnetMintableERC20-Scroll │ '0x4c14f2Ff4e9bA175696B540ABf3e5a8E2A59Baee' │
└──────────────────────────────────┴──────────────────────────────────────────────┘
✨  Done in 492.94s.
```

## 20240130

**Deploy L2X market to zkatana**

```
# Command
HARDHAT_NETWORK=zkatana MARKET_NAME=L2X yarn deploy
```

Results:

```
Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│             ACLManager-L2X              │ '0xbC005472f4a270DbD3c160F54ED70b0174638472' │
│               AToken-L2X                │ '0x6E9a4be9B3246550BC8afFA81bF5a9c6DB4539e4' │
│             AaveOracle-L2X              │ '0xf3A2A69771e67139FDDaE78f2aF4B612e2A997C1' │
│               BorrowLogic               │ '0x6aadE1B79EC9de5882CACDF0e0209a337BE571AA' │
│               BridgeLogic               │ '0x4d1FA249a4773b2866D2D3677a15111D6e57A6bB' │
│            ConfiguratorLogic            │ '0x63cA9462D32a5C0F2dFB56Ee3130773E24Cf157F' │
│     DAI-TestnetPriceAggregator-L2X      │ '0x06BCddb5b495aD8c08f8D91b41b021ec5aFcB659' │
│        DelegationAwareAToken-L2X        │ '0x3695CDA27Cd5059c737E83aDDE06410112c52EfD' │
│               EModeLogic                │ '0xC41D138661Ac0f2D7c0F205C86bFcEbC911F67e8' │
│               Faucet-L2X                │ '0x6CC063839ddB25959e0a478E45F39A8C5BE56951' │
│             FlashLoanLogic              │ '0x44d22AD2064558c2b29359e387201D2c5263864D' │
│            LiquidationLogic             │ '0xDB7C5A7c059905dd86dFffF1816EF564485B61fC' │
│           Pool-Implementation           │ '0x36E33410312E3C8F6305392e5ACc02B5aBBb9952' │
│             Pool-Proxy-L2X              │ '0xa4673Fb3A0a78B9d0A1fD21C3cEb08373fBFE6d7' │
│        PoolAddressesProvider-L2X        │ '0x048a06C7F16dFdd02260e7C8D3835a095D57e263' │
│      PoolAddressesProviderRegistry      │ '0x47e415E2C826503f5d6eCB04F8143C66aC8CC93D' │
│     PoolConfigurator-Implementation     │ '0xb5dc3fcb0c2f6191e4173a927be8df90b272bd19' │
│       PoolConfigurator-Proxy-L2X        │ '0xC1493257C490114dE4dA8C5AD16F38155bc15BAf' │
│          PoolDataProvider-L2X           │ '0x7f8649b8D5Ae2EfE2A822a8C375eaa83f93A5A64' │
│                PoolLogic                │ '0xcbDDD57Fe1592A05a77BA275D8BeDaa18D688F12' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x77f3eaa49102B89b4B718509d48218c93A17c123' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0xb654265030e9632505e5458ec2761ACa19c18f1D' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x6a200400Bdb723857730E0b3FED7cE80a1723bAE' │
│           ReservesSetupHelper           │ '0x69E3c73968870561453bc2e741B727C442D2A406' │
│           StableDebtToken-L2X           │ '0x402ae756526D0EFAf2f40AE42e50C3ea1103E171' │
│               SupplyLogic               │ '0x84486dFdA4902F715bed4f7D8eBC8fD1f91b900E' │
│           Treasury-Controller           │ '0xc1C59Aa1c139eec4593b0995D2FC8C6abB30FD0E' │
│         Treasury-Implementation         │ '0xF3e29E3B80a10C10F14E858EA16E99f132D07b88' │
│              TreasuryProxy              │ '0x09B485A04e6194dFd374e1f8871a5cEEdfE86a9C' │
│          VariableDebtToken-L2X          │ '0x556414FF1de99545f00bc5c60818788B73E7b9bd' │
│     WETH-TestnetPriceAggregator-L2X     │ '0x81b78d228721C10E99dFEA57c92086c16fcE5304' │
│             DAI-AToken-L2X              │ '0xcF512b433001298bc963ee450F51F455a98ab3A3' │
│        DAI-VariableDebtToken-L2X        │ '0xC074a30D76e82909bCD5871a6F77C542b08d47E2' │
│         DAI-StableDebtToken-L2X         │ '0xb48EBBdEb4794abEfFC3dCf323c11CB89014Ba06' │
│             WETH-AToken-L2X             │ '0xc02D999dB0686112d29937be20249aeC3111B2f6' │
│       WETH-VariableDebtToken-L2X        │ '0xf4af5257A699D0BB55FB14BF9F62b809334066bd' │
│        WETH-StableDebtToken-L2X         │ '0xC5BCeb521d976119fF479A72d4D9cC53110451f9' │
│          MockFlashLoanReceiver          │ '0x2fEf92cDA3ae49608a6DF96EAC69DD9b4C91a271' │
│          WrappedTokenGatewayV3          │ '0x98D970b23ad50200271247BBcb4A22E5971F905E' │
│          WalletBalanceProvider          │ '0x256eb348AedfF2C05549b6Ba78ecdA7C2D8069Ec' │
│          UiPoolDataProviderV3           │ '0x7e536EdF13E1766e95658E32C20534f8b51D7aC2' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌───────────────────────────────┬──────────────────────────────────────────────┐
│            (index)            │                   address                    │
├───────────────────────────────┼──────────────────────────────────────────────┤
│ DAI-TestnetMintableERC20-L2X  │ '0xC121c0f2104cb98ef5dE1135e757d9DaE546136A' │
│ WETH-TestnetMintableERC20-L2X │ '0x9B01BF6646f660bD2642e96a483E7544228C20fa' │
└───────────────────────────────┴──────────────────────────────────────────────┘
```

## 20240126

**deploy ui helper**

```
- UiPoolDataProviderV3 price aggregator: 0xEA245346550141C347584176f34ac6Ea7235Caf6

- UiPoolDataProviderV3 eth/usd price aggregator: 0xEA245346550141C347584176f34ac6Ea7235Caf6

- UiPoolDataProviderV3 deployment
UiPoolDataProviderV3: 0x2A56F76d726508819c4a7f36e6a7FAe918c68044
```

## 20240123

**deploy to zkatana**

```
Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0x1f74A222E9b7cf13De406F47e6a0e8dae54880f6' │
│               SupplyLogic               │ '0x53C9ef762dF8c112be9911F0494a48858b7d329C' │
│               BorrowLogic               │ '0x221A74efc136eb0F49fF0BA82A5A0e1d4F0443D1' │
│            LiquidationLogic             │ '0x0482Eba1ff86712Ba2f061401Be90362416ca3F5' │
│               EModeLogic                │ '0x2b46C26Dd525eB76ADf42DB68612b0bb3Dded6ed' │
│               BridgeLogic               │ '0x73E77D33a37E932346823e4f0F63d3f3a9C639e6' │
│            ConfiguratorLogic            │ '0x718C603510f65a23cb539B3435C6a698a6351397' │
│             FlashLoanLogic              │ '0x78d70110Cd0681B93004Ac43fEB5a144Dbf9be4c' │
│                PoolLogic                │ '0xEA23CD035B63885b3f8Ec4F339A3bA816665Dcc2' │
│              TreasuryProxy              │ '0xD5Cb29e2fd58ae21B6A4014e66F1e0B1D7914320' │
│           Treasury-Controller           │ '0xB64A465AC5BE7a827608F7b490D72c7888E0D6C3' │
│         Treasury-Implementation         │ '0x616720C5CF99EfB561f32DbD04bb2cAdcc240221' │
│             Faucet-Zkatana              │ '0x00d5888D012D75dBF39302EE2857A50A70EE7F80' │
│      PoolAddressesProvider-Zkatana      │ '0xbd83AdA259aF94c1004Fa1016913917514D4c06c' │
│        PoolDataProvider-Zkatana         │ '0x2519E1B5192ca4e71daE7521fD299cD42f1f2445' │
│   DAI-TestnetPriceAggregator-Zkatana    │ '0xf54705E36E4330A9F34265644DEd41D8f0B96E3B' │
│   WETH-TestnetPriceAggregator-Zkatana   │ '0x3FB5c01BBD22758fCbBdace2F2514ed9dd63Bb66' │
│           Pool-Implementation           │ '0x5D4163883FF249B1C9dcf1259C640D1bA2D841e6' │
│     PoolConfigurator-Implementation     │ '0xd883475A5faD68CC0Abf3f9dA0475d0633697B46' │
│           ReservesSetupHelper           │ '0x3f27DA3f588Cb84Ef44816D31200693D7AFF325c' │
│           ACLManager-Zkatana            │ '0xf1bCEA2385F779364AB44456189aC7b714f697c8' │
│           AaveOracle-Zkatana            │ '0x3C25E0CbdE8f7A335e56C806CF95D9412F0dBA24' │
│           Pool-Proxy-Zkatana            │ '0xd52D30EA7329164F16C800ca23634F51EE069B09' │
│     PoolConfigurator-Proxy-Zkatana      │ '0x0C28C8f69dAe71307b88252F39f1eaacf8DeD287' │
│             EmissionManager             │ '0xe0495fAa2F7E54F33BB7963aa696CB1776d945Ca' │
│       IncentivesV2-Implementation       │ '0x62b290D1e9E40cd0063813f6d074948c3b08c2BD' │
│             IncentivesProxy             │ '0xB811192040c1D43aF23bA64caAE14800C84E4FcE' │
│       PullRewardsTransferStrategy       │ '0xCDDb687d0893D128102C0b7C01eC740a52fF9cA3' │
│             AToken-Zkatana              │ '0xCCCB8063800D1c0159Ec15391460A5C0bA8f14e7' │
│      DelegationAwareAToken-Zkatana      │ '0x0F2E702d63c6739B90A6A9601963fAc084B067fd' │
│         StableDebtToken-Zkatana         │ '0x920aa35d91fA8eE559e09f5A2134040D6de3a024' │
│        VariableDebtToken-Zkatana        │ '0x3A8329e643d5a024edcE9A50763dB2dB1ceE49ba' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x53a28273A36B899939390Da75F0e7B0C78CF99C3' │
│  ReserveStrategy-rateStrategyStableOne  │ '0x881198B2865d8aD57164c9DDEcb03d73131Df46C' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0x52D446b2c7cb6283685726B7D5604839225704C1' │
│           DAI-AToken-Zkatana            │ '0xCe800422C44E3335334D2191fb53E6B59ACF1539' │
│      DAI-VariableDebtToken-Zkatana      │ '0x65823D620e03eE128935B601Cf60b59290038b17' │
│       DAI-StableDebtToken-Zkatana       │ '0xb0D61b2f0b455B706679e47958a8E949bbEc7dd4' │
│           WETH-AToken-Zkatana           │ '0xFAb3485f8e93986eA61cbee62D5d4D1978F65539' │
│     WETH-VariableDebtToken-Zkatana      │ '0x9Cf7239B79aBb9A1c6129D016f47A1964ec23641' │
│      WETH-StableDebtToken-Zkatana       │ '0xB7838BcD7323D029e1BE5239E6C8EBe9BFD7fcf9' │
│          MockFlashLoanReceiver          │ '0x30a8f2c5992b541228a02b4ED542150904691Ec3' │
│          WrappedTokenGatewayV3          │ '0xC48C8931F0b7aB87E44C922acbc5ea3de872aC6D' │
│          WalletBalanceProvider          │ '0x0Cc116A85926627f6Ba0A114DDfAC07864411e3c' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘

Mintable Reserves and Rewards
┌───────────────────────────────────┬──────────────────────────────────────────────┐
│              (index)              │                   address                    │
├───────────────────────────────────┼──────────────────────────────────────────────┤
│ DAI-TestnetMintableERC20-Zkatana  │ '0x5be34b78827DB54F7c703CBBDf85241d8029FC1e' │
│ WETH-TestnetMintableERC20-Zkatana │ '0x6776E375569dB3bAfB1F96dDA74c2B4D5cF56854' │
└───────────────────────────────────┴──────────────────────────────────────────────┘
```
