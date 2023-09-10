<p align="center">
  <a href="https://evmts.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/35039927/218812217-92f0f784-cb85-43b9-9ca6-e2b9effd9eb2.png">
      <img alt="wagmi logo" src="https://user-images.githubusercontent.com/35039927/218812217-92f0f784-cb85-43b9-9ca6-e2b9effd9eb2.png" width="auto" height="300">
    </picture>
  </a>
</p>

<p align="center">
  Evmts bun example
<p>

## ✨ EVMts bun starterkit

Starter project of using Bun with EVMts. EVMts is an LSP and bundler used to import solidity contracts directly into your TypeScript code.

![Untitled_ Sep 9, 2023 9_27 AM (1)](https://github.com/evmts/bun-starterkit/assets/35039927/53685b10-2dc6-4115-9c37-b8340dc02536)

## 🤝 Getting Started

1. Install Node Modules

```
bun install
```

2. Run tests

```
bun test
```

3. Run [bun script](./readContract.ts) in watch mode

```
bun dev
```

## EVMts bundler configuration

EVMts works via a [bun plugin](https://bun.sh/docs/bundler/plugins). This includes:

1. EVMts configuration which is in the [tsconfig.json](./tsconfig.json). Note in future EVMts will be configurable via a `evmts.config.ts` file.

The minimal configuration simply needs to specify typescript uses the `@evmts/ts-plugin` but it also has other configuration options. This template globally configured the contract addresses for [ExampleContract.sol](./ExampleContract.sol)

2. Bun plugin configuration in the [plugins.ts](./plugins.ts) file along with loading the plugin file in [bunfig.toml](./bunfig.toml)

This enables bun to import solidity files

## EVMts LSP

EVMts LSP gives you language server functionality in your editor. In EVMts this includes many nice features

- Natspec comments on hover
- go-to-definition takes you directly to the solidity code that defined the contract method or event
- Etherscan links to your contracts on hover

Below is an example of go-to-definition support

![Untitled\_ Sep 3, 2023 6_52 AM](https://github.com/evmts/evmts-monorepo/assets/35039927/ac46caf3-32cc-4ec5-8b3b-5e1df3f7819a)

## Ethers.js

An ethers.js version of this template is available on the [ethers branch](https://github.com/evmts/bun-starterkit/tree/ethers)

![image](https://github.com/evmts/bun-starterkit/assets/35039927/36d28504-0523-4d23-ad40-04fa8915f325)

## VSCode instructions

Special steps are needed to get the LSP features working in VSCode. Most editors should work out the box but please open an issue if you run into trouble.

To use this plugin with Visual Studio Code, you should set your workspace's version of TypeScript, which will load plugins from your tsconfig.json file.

1. Open a typescript file in your project in vscode
2. Open command pallet <cmd>+p or <ctrl>+p
4. Select `>Typescript: Select TypeScript Version` in command pallet
5. Select `Use workspace version`

![image](https://github.com/evmts/bun-starterkit/assets/35039927/8d358843-8eed-415d-bc3c-04522a463d15)
![image](https://github.com/evmts/bun-starterkit/assets/35039927/0111bd24-689f-4f57-a495-ed7dc17f63ae)

You now should get all the EVMts LSP features such as natspec comments on hover and go-to-solidity-definition support

For more details see: [Using the workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript).

## ⭐ Github

If you like Evmts give it a ⭐ at the [Evmts monorepo](https://github.com/evmts/evmts-monorepo)

## 🔗 See also

- Check out [Next.js starterkit](https://github.com/orgs/evmts/repositories) for an example of Evmts wagmi and Next
- Check out [Vite starterkit](https://github.com/evmts/evmts-monorepo/tree/main/examples/vite) for an example of Evmts wagmi and Vite

