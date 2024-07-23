export type Endcoin = {
  version: '0.1.0';
  name: 'endcoin';
  constants: [
    {
      name: 'AUTHORITY_SEED';
      type: 'string';
      value: '"authority"';
    },
  ];
  instructions: [
    {
      name: 'init';
      accounts: [
        {
          name: 'auth';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'endcoinMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'gaiacoinMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'lpMint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vaultLp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultEndcoin';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaultGaiacoin';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createAmm';
      accounts: [
        {
          name: 'amm';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'admin';
          isMut: false;
          isSigner: false;
          docs: ['The admin of the AMM'];
        },
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'id';
          type: 'publicKey';
        },
        {
          name: 'fee';
          type: 'u16';
        },
      ];
    },
    {
      name: 'createSst';
      accounts: [
        {
          name: 'sst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['The account paying for all rents'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createPool';
      accounts: [
        {
          name: 'amm';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mintLiquidity';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'mintA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['The account paying for all rents'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createMetadata';
      accounts: [
        {
          name: 'mint';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'mintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'metadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'sysvarInstruction';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenMetadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'amm';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'token';
          type: 'u8';
        },
      ];
    },
    {
      name: 'readFeed';
      accounts: [
        {
          name: 'aggregator';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'sst';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'ReadFeedParams';
          };
        },
      ];
    },
    {
      name: 'depositLiquidity';
      accounts: [
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['The account paying for all rents'];
        },
        {
          name: 'userAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintLiquidity';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'depositorAccountLiquidity';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['Solana ecosystem accounts'];
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'sst';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintAuthority';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'meanTemp';
          type: 'f64';
        },
      ];
    },
    {
      name: 'swapExactTokensForTokens';
      accounts: [
        {
          name: 'amm';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'trader';
          isMut: false;
          isSigner: true;
          docs: ['The account doing the swap'];
        },
        {
          name: 'mintA';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mintB';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'traderAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'traderAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['The account paying for rent'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'swapA';
          type: 'bool';
        },
        {
          name: 'inputAmount';
          type: 'u64';
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'amm';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'id';
            docs: ['The primary key of the AMM'];
            type: 'publicKey';
          },
          {
            name: 'admin';
            docs: ['Account that has admin authority over the AMM'];
            type: 'publicKey';
          },
          {
            name: 'fee';
            docs: ['The LP fee taken on each trade, in basis points'];
            type: 'u16';
          },
          {
            name: 'created';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'pool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amm';
            docs: ['Primary key of the AMM'];
            type: 'publicKey';
          },
          {
            name: 'mintA';
            docs: ['Mint of token A - Endcoin'];
            type: 'publicKey';
          },
          {
            name: 'mintB';
            docs: ['Mint of token B - Gaiacoin'];
            type: 'publicKey';
          },
        ];
      };
    },
    {
      name: 'sst';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'temperature';
            docs: ['temperature value in degrees celsius'];
            type: 'f64';
          },
          {
            name: 'created';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'state';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amm';
            docs: ['Primary key of the AMM'];
            type: 'publicKey';
          },
          {
            name: 'mintA';
            docs: ['Mint of token A - Endcoin'];
            type: 'publicKey';
          },
          {
            name: 'mintB';
            docs: ['Mint of token B - Gaiacoin'];
            type: 'publicKey';
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'ReadFeedParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'maxConfidenceInterval';
            type: {
              option: 'f64';
            };
          },
        ];
      };
    },
    {
      name: 'ReadHistoryParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'timestamp';
            type: {
              option: 'i64';
            };
          },
        ];
      };
    },
    {
      name: 'SstError';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'AlreadyInitialized';
          },
        ];
      };
    },
    {
      name: 'MetadataError';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'InvalidMetadata';
          },
        ];
      };
    },
    {
      name: 'SwitchboardClientError';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'InvalidSwitchboardAccount';
          },
          {
            name: 'StaleFeed';
          },
          {
            name: 'ConfidenceIntervalExceeded';
          },
          {
            name: 'InvalidHistoryBuffer';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidFee';
      msg: 'Invalid fee value';
    },
    {
      code: 6001;
      name: 'InvalidMint';
      msg: 'Invalid mint for the pool';
    },
    {
      code: 6002;
      name: 'DepositTooSmall';
      msg: 'Depositing too little liquidity';
    },
    {
      code: 6003;
      name: 'OutputTooSmall';
      msg: 'Output is below the minimum expected';
    },
    {
      code: 6004;
      name: 'InvariantViolated';
      msg: 'Invariant does not hold';
    },
    {
      code: 6005;
      name: 'AlreadyCreated';
      msg: 'AMM Already Created';
    },
  ];
};

export const IDL: Endcoin = {
  version: '0.1.0',
  name: 'endcoin',
  constants: [
    {
      name: 'AUTHORITY_SEED',
      type: 'string',
      value: '"authority"',
    },
  ],
  instructions: [
    {
      name: 'init',
      accounts: [
        {
          name: 'auth',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'endcoinMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'gaiacoinMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'lpMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'vaultLp',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultEndcoin',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vaultGaiacoin',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createAmm',
      accounts: [
        {
          name: 'amm',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: false,
          isSigner: false,
          docs: ['The admin of the AMM'],
        },
        {
          name: 'state',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'id',
          type: 'publicKey',
        },
        {
          name: 'fee',
          type: 'u16',
        },
      ],
    },
    {
      name: 'createSst',
      accounts: [
        {
          name: 'sst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['The account paying for all rents'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createPool',
      accounts: [
        {
          name: 'amm',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mintLiquidity',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mintA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['The account paying for all rents'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['Solana ecosystem accounts'],
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'createMetadata',
      accounts: [
        {
          name: 'mint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mintAuthority',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadata',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sysvarInstruction',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'state',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'amm',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'token',
          type: 'u8',
        },
      ],
    },
    {
      name: 'readFeed',
      accounts: [
        {
          name: 'aggregator',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sst',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'ReadFeedParams',
          },
        },
      ],
    },
    {
      name: 'depositLiquidity',
      accounts: [
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['The account paying for all rents'],
        },
        {
          name: 'userAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintLiquidity',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'depositorAccountLiquidity',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['Solana ecosystem accounts'],
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sst',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'mintAuthority',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'meanTemp',
          type: 'f64',
        },
      ],
    },
    {
      name: 'swapExactTokensForTokens',
      accounts: [
        {
          name: 'amm',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'trader',
          isMut: false,
          isSigner: true,
          docs: ['The account doing the swap'],
        },
        {
          name: 'mintA',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mintB',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'traderAccountA',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'traderAccountB',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['The account paying for rent'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'swapA',
          type: 'bool',
        },
        {
          name: 'inputAmount',
          type: 'u64',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'amm',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'id',
            docs: ['The primary key of the AMM'],
            type: 'publicKey',
          },
          {
            name: 'admin',
            docs: ['Account that has admin authority over the AMM'],
            type: 'publicKey',
          },
          {
            name: 'fee',
            docs: ['The LP fee taken on each trade, in basis points'],
            type: 'u16',
          },
          {
            name: 'created',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'pool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amm',
            docs: ['Primary key of the AMM'],
            type: 'publicKey',
          },
          {
            name: 'mintA',
            docs: ['Mint of token A - Endcoin'],
            type: 'publicKey',
          },
          {
            name: 'mintB',
            docs: ['Mint of token B - Gaiacoin'],
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'sst',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'temperature',
            docs: ['temperature value in degrees celsius'],
            type: 'f64',
          },
          {
            name: 'created',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'state',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amm',
            docs: ['Primary key of the AMM'],
            type: 'publicKey',
          },
          {
            name: 'mintA',
            docs: ['Mint of token A - Endcoin'],
            type: 'publicKey',
          },
          {
            name: 'mintB',
            docs: ['Mint of token B - Gaiacoin'],
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'ReadFeedParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'maxConfidenceInterval',
            type: {
              option: 'f64',
            },
          },
        ],
      },
    },
    {
      name: 'ReadHistoryParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'timestamp',
            type: {
              option: 'i64',
            },
          },
        ],
      },
    },
    {
      name: 'SstError',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'AlreadyInitialized',
          },
        ],
      },
    },
    {
      name: 'MetadataError',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'InvalidMetadata',
          },
        ],
      },
    },
    {
      name: 'SwitchboardClientError',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'InvalidSwitchboardAccount',
          },
          {
            name: 'StaleFeed',
          },
          {
            name: 'ConfidenceIntervalExceeded',
          },
          {
            name: 'InvalidHistoryBuffer',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidFee',
      msg: 'Invalid fee value',
    },
    {
      code: 6001,
      name: 'InvalidMint',
      msg: 'Invalid mint for the pool',
    },
    {
      code: 6002,
      name: 'DepositTooSmall',
      msg: 'Depositing too little liquidity',
    },
    {
      code: 6003,
      name: 'OutputTooSmall',
      msg: 'Output is below the minimum expected',
    },
    {
      code: 6004,
      name: 'InvariantViolated',
      msg: 'Invariant does not hold',
    },
    {
      code: 6005,
      name: 'AlreadyCreated',
      msg: 'AMM Already Created',
    },
  ],
};
