import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  // 1️⃣ 기본 네트워크 설정
  defaultNetwork: "kaia_testnet",  // 기본 네트워크를 KAIA 테스트넷으로 설정

  // 2️⃣ 네트워크 구성
  networks: {
    hardhat: {},
    kaia_testnet: {
      url: process.env.KIA_TESTNET_URL || "https://public-en-kairos.node.kaia.io", // KAIA 테스트넷 RPC URL 설정
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1001,
      gas: "auto",
      gasPrice: "auto",
    },
  },

  // 3️⃣ Solidity 설정
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris", // EVM 타겟: 파리 (Merge 이후 환경)
    },
  },

  // 4️⃣ 파일 경로 설정
  paths: {
    root: "./",
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  // 5️⃣ Mocha 테스트 설정
  mocha: {
    timeout: 40000,
  },

  //   // 6️⃣ 가스 사용량 리포트
  //   gasReporter: {
  //     enabled: process.env.REPORT_GAS === "true",
  //     currency: "USD",
  //     gasPrice: 100,
  //     coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  //   },

  //   // 7️⃣ Etherscan 컨트랙트 검증
  //   etherscan: {
  //     apiKey: process.env.ETHERSCAN_API_KEY,
  //   },
};

export default config;
