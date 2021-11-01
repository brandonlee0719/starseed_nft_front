<template>
<main id="main">
    <div class="content">
            <h3 class="account">Connected Account <span id="account" class="purple">{{account}}</span><button  @click="CustomToken" class="addStar">Add Stars to <img width="30px" src="https://jaguarswap.com/images/tokens/metamask.png"></button></h3>

        <h4 class="heading center">Simpleswap Multi-Bridge</h4>
        <div class="cards">
            <div class="container">
                <div class="card" v-for="matic in starSeed" v-bind:class="{'larger':matic.type}">
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
                        <button @click="MetaMask">Unlock Wallet</button>
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
export default {
    components: {},
    data() {
        return {
            starSeed: [
                {
                    name: "Simple Swap",
                    type: "iframe",
                    url: ' <iframe style="opacity:0.7" id="simpleswap-frame" name="SimpleSwap Widget" width="100%" height="100%" src="https://simpleswap.io/widget/528d693c-ba1c-4472-8db9-14e043259ef6" frameborder="0"></iframe> '
                }
            ],
            account: "Not Connected"
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

