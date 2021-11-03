module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    testMatch: ["**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],
    transform: {
      // ...
      // process `*.ts` files with `ts-jest`
      "^.+\\.tsx?$": "ts-jest"
    },
    transformIgnorePatterns: ["node_modules/(?!vuetify)"],
    setupFiles: ["./tests/setup.ts"]
  };
  