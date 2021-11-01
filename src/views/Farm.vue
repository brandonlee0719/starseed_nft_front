<template>
<main id="main">
    <div class="content">
            <h3 class="account">Connected Account <span id="account" class="purple">{{account}}</span><button  @click="CustomToken" class="addStar">Add Stars to <img width="30px" src="https://jaguarswap.com/images/tokens/metamask.png"></button></h3>

        <h4 class="heading center">Yield Farming</h4>
        <p class="sm-heading center">Stake LP Tokens to Earn STAR</p>
         
        <div class="cards">
            <div class="container">
                <div class="card"  v-for="matic in starSeed" v-bind:class="{'larger':matic.type}">
                    <div v-if="!matic.type">
                        <div class="icon">
                            <img :src="matic.img"> {{matic.name}}
                        </div>
                        <div class="grid">
                            <div class="label">
                                APR :
                            </div>
                            <div class="cont">
                                NaN%
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label">
                                Earn :
                            </div>
                            <div class="cont">
                                STAR
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label large-text">
                                Deposit Fee :
                            </div>
                            <div class="cont  large-text">
                                NaN%
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label colored">
                                STAR EARNED
                            </div>
                            <div class="cont">
                                <button>Compound</button>
                                <button>Harvest</button>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="label colored">
                                STAR STAKED
                            </div>

                        </div>
                        <button @click="pops(matic)">Unlock Wallet</button>
                        <hr>
                        <button v-if="!matic.show" @click="matic.show = true" class="btn-sm">Details</button>
                        <button v-if="matic.show" @click="matic.show = false" class="btn-sm">Hide Details</button>
                        <div class="info" v-if="matic.show">
                            <div class="grid">
                                <div class="label colored">
                                    Deposit:
                                </div>
                                <div class="cont sm-text">
                                    STAR
                                    <i class="far fa-external-link-square-alt"></i>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="label colored">
                                    Total Liquidity:
                                </div>
                            </div>
                            <div class="grid">
                                <div class="label colored">
                                    <a href="">View on Matic Explorer</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div v-html="matic.url" v-if="matic.type" style="width:100%;height:100%;"></div>
                </div>

            </div>
        </div>
    </div>
    <div class="pops" v-if="showPops">
        <div class="head">
            <h6>Connect to a wallet</h6>
            <i class="fa fa-close"></i>
        </div>
        <ul class="cont">
            <li @click="metaMaskWallet">
                <h4>MetaMask</h4>
                <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ exWFUV"><circle cx="48" cy="48" r="48" fill="white"></circle><path d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z" fill="#E17726"></path><path d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z" fill="#E27625"></path><path d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z" fill="#E27625"></path><path d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z" fill="#E27625"></path><path d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z" fill="#E27625"></path><path d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z" fill="#E27625"></path><path d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z" fill="#E27625"></path><path d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z" fill="#E27625"></path><path d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z" fill="#D5BFB2"></path><path d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z" fill="#D5BFB2"></path><path d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z" fill="#233447"></path><path d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z" fill="#233447"></path><path d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z" fill="#CC6228"></path><path d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z" fill="#CC6228"></path><path d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z" fill="#CC6228"></path><path d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z" fill="#CC6228"></path><path d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z" fill="#E27525"></path><path d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z" fill="#E27525"></path><path d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z" fill="#E27525"></path><path d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z" fill="#E27525"></path><path d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z" fill="#F5841F"></path><path d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z" fill="#F5841F"></path><path d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z" fill="#C0AC9D"></path><path d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z" fill="#161616"></path><path d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z" fill="#763E1A"></path><path d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z" fill="#763E1A"></path><path d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z" fill="#F5841F"></path><path d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z" fill="#F5841F"></path><path d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z" fill="#F5841F"></path></svg>
            </li>
            <li @click="trustWallet">
                <h4>TrustWallet</h4>
                <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ exWFUV"><g clip-path="url(#clip0)"><path d="M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z" fill="#3375BB"></path><path d="M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="96" height="96" fill="white"></rect></clipPath></defs></svg>
            </li>
        </ul>
    </div>
    <div v-if="messages" class="messages">
            <h4>Transcation  {{messages}}</h4>
        </div>
</main>
</template>

<script>
import axios from 'axios'
import moment from "moment"
import matic from "../assets/matic.png"
import btcMatic from "../assets/btc-matic.png"
import ethMatic from "../assets/eth-matic.png"
import ethBtc from "../assets/eth-btc.png"
import maticUSD from "../assets/matic-usd.png"
import logoMain from '../assets/logo-3.png';

import WalletConnectProvider from "@maticnetwork/walletconnect-provider"

import Web3 from "web3"
import Matic from "maticjs"
import getWeb3 from './web3.js';
export default {
    components: {},
    data() {
        return {
            starSeed: [{
                    name: "StartSeed Matic",
                    color: "blue",
                    img: matic,
                    show: false,
                    address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
                    ABI:[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
                },
                {
                    name: "BTC Matic",
                    color: "purple",
                    img: btcMatic,
                    show: false,
                    address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                    ABI:[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"IMPLEMENTATION_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
                },
                {
                    name: "ETH Matic",
                    color: "red",
                    img: ethMatic,
                    show: false,
                    address:"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                    ABI:[{"inputs":[{"internalType":"address","name":"childChainManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

                }, {
                    name: "ETH BTC",
                    color: "green",
                    img: ethBtc,
                    show: false,
                     address:"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
                    ABI:[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
                },
                {
                    name: "Matic USD",
                    color: "orange",
                    img: maticUSD,
                    show: false
                }
            ],
            account: "Not Connected",
            selectedABI:false,
            selectedContractAddress:false,
            showPops:false,
            messages:false
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    created() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }
    },
    methods: {
        async pops(itm){
            if(itm.address){
                this.selectedABI = itm.ABI;
                this.selectedContractAddress = itm.address;
                this.showPops = true
            }
           
        },
        async metaMaskWallet(){
            this.showPops = false
            getWeb3()
                .then((result) => {
                    console.log(result)
                 const web3 = result;// we instantiate our contract next
                 console.log(web3);
                 web3.eth.getAccounts()
                    .then((accounts) => {
                        this.account = accounts[0];
                        console.log(this.account);
                        const myContractAbi = this.selectedABI
                        const myContractAddress = this.selectedContractAddress; 
                        const myContractInstance = new web3.eth.Contract(myContractAbi, myContractAddress);
                         this.messages = " Pending..."
                        myContractInstance.methods.balanceOf(this.account)
                            .send({
                                from: this.account,gasPrice: 0
                            })
                            .then (
                                (receipt) => {
                                    console.log(receipt)
                                    this.messages = " Successfull. Gas used " + receipt.cumulativeGasUsed;
                                    setTimeout(d=>{
                                        this.messages = false
                                    },5000)
                            },(error) =>{
                                this.messages = " Cancelled";
                                    setTimeout(d=>{
                                        this.messages = false
                                    },5000)
                            })
                    })
                })
        },
        async trustWallet(){
             this.showPops = false
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            console.log(accounts)
            this.account = accounts[0];
            const maticProvider = new WalletConnectProvider(
                {
                    host: "https://rpc-mumbai.matic.today",
                    callbacks: {
                    onConnect: console.log('connected'),
                    onDisconnect: console.log('disconnected!')
                    }
                }
                )
            const ropstenProvider = new WalletConnectProvider({
                host: "https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",
                callbacks: {
                    onConnect: console.log('connected'),
                    onDisconnect: console.log('disconnected')
                }
                })
            const maticWeb3 = new Web3(maticProvider)
            const ropstenWeb3 = new Web3(ropstenProvider)
            const myContractAbi = this.selectedABI
            const myContractAddress = this.selectedContractAddress; 
            const myContractInstance = new maticWeb3.eth.Contract(myContractAbi, myContractAddress)
            const tx = {
                            from: this.account,
                            to: myContractAddress,
                            gas: 800000,
                            data: myContractInstance.methods.balanceOf(this.account).encodeABI(),
                       }
                maticWeb3.eth.signTransaction(tx)
                .then((result) =>{
                    maticWeb3.eth.sendSignedTransaction(result)
                    .then((receipt) => 
                    console.log (receipt)
                )
                })

        },
        async MetaMask() {
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            console.log(accounts)
            this.account = accounts[0];
        },
        async CustomToken() {
            var tokens  = await this.MetaMask()
            const tokenAddress = '0x1E0f334468226640b0ea76e8dEf87a70012eCcA4';
            const tokenSymbol = 'STAR';
            const tokenDecimals = 18;
            const tokenImage = 'https://upwork-usw2-prod-file-storage-wp1.s3.us-west-2.amazonaws.com/workplace/attachment/fa082a5b2e94bf1e76ca0f9b5fc23411?response-content-disposition=inline%3B%20filename%3D%22Starseed-Dimension1.jpg%22%3B%20filename%2A%3Dutf-8%27%27Starseed-Dimension1.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGw2APTHGT%2BDzrP4FrawkgDvU5hD%2Fr2hbDHPVM074KpkAiEAw3sFP5RDbQn1YefTCH8FISnhl724N4UQ0KBQPmIKouAq1gQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDAImma6YwmGQI3Wu3SqqBIuFEDzBiTY5AOjndBtNhTUDamknRsuB4AX8IDsrm6bMNu8sVHOhQFMJ7UiFK155cMYs%2FM6IfhxFJUqzZuAZsks4dLdKMe%2FVpe10XlmbulaYyJXKY577ULBsuhh56ba3Jx4UVWydotee0NMbjZOb%2FBuHXlogYtBvmk258j8mqjuVVxsgdo8slUfw85os%2Bzmk7%2F%2B3onTI2vl2BdTmI3oD1cpCz334mNvsxMLsAwTSl8f2A7L12W3MWuNAQtvNh%2By7Q5LSPn9cyqb1raUIoF2jS%2FRvH%2BaulGp2bhn733qJGqzwUNLYmi9pQyVnpJg66V5dPjF1t168QLbbSjEx9t7fp%2FWidZK08yL0%2FAy1doNH2FzNkPKmrhmiPAYqoohEgLlIeBqACzy70MLA9YJcsL%2Fe5Xh%2F7tkmYUdPk%2BtfKbMVo9fOxsibrmYaZ0vOr%2F5VdpckU%2FW%2FE2VUS%2BJwi21h%2Bee7UXXSsdSQBIBisOPhRj4dEn6skev41s49kmtHgsQvzCNvCzMc4kAteI87c7WnUb9CQjDVPxgpcMuLrR8xzh9Hd1PpOhB5aObvxaWJpCiAbDt8NgpcxUNWAr0HTxHmCRNV4iRz4GxwODTx9OHTv8xpkWsOlBMGw0%2BKgwZ9KKD1BvFu%2BsktKg2pLg3lkU0Er0%2FZe1fo%2Bs2STOPpoax8%2BlXU1w11R5XaC34KnJW0zz%2BUx6twfOy%2F7cFI4CF1Qsj%2BVD0%2BhLjJYu0%2BTKFJFo3SMNPp04oGOqcB%2Bg0mDvadqMC65u%2FMo3EWEkRwlPAByx8QTbIbNLPzVOcY5lqCEVhQVBYoXs2%2FbsNhKdUH3y5FjRewUPsk0grVBvanllaDyu6wHbCWcjcclKm8TmSKCOFFqCszfbqOU6nvOhnTL6sawLSx7f%2FGQI1FuYgqJIBTnuujPxGYrmq55XnVg%2Fdi30ijaSDj9VhpHqwukthXwNAlUUQnTsFvqzwOdkG6G2JvNSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210930T001840Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54ATYNRN4%2F20210930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b071723508914fffe021f4069504334a80e996e73e3079cc6b01ea48879aa57a';

            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const wasAdded = await ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                            address: tokenAddress, // The address that the token is at.
                            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                            decimals: tokenDecimals, // The number of decimals in the token
                            image: tokenImage, // A string url of the token logo
                        },
                    },
                });

                if (wasAdded) {
                    console.log('Thanks for your interest!');
                } else {
                    console.log('Your loss!');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

