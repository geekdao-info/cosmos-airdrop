<template>
    <div>
        <div class="entry">
            <h1 id="nomic-stakenet-launch">Nomic Stakenet Launch</h1>
            <p
                >We’re happy to announce the launch of the Nomic Stakenet. This marks the beginning
                of the Nomic mainnet and the Nomic Bitcoin Bridge.</p
            >
            <p
                >Included in the Stakenet is an airdrop of the
                <span class="small-caps">NOM</span> staking token which is claimable by all
                <span class="small-caps">ATOM</span> holders and stakers. You may now stake
                <span class="small-caps">NOM</span> and begin earning rewards.</p
            >
            <h2 id="nomic-bitcoin-bridge">Nomic Bitcoin Bridge</h2>
            <p
                >Nomic’s first product is the Bitcoin Bridge, bringing Bitcoin to Cosmos. The bridge
                creates a new asset, nBTC, which is IBC-enabled and fully backed by
                <span class="small-caps">BTC</span>. We have designed a unique, permissionless
                protocol which allows anyone to easily deposit
                <span class="small-caps">BTC</span> in exchange for nBTC, or withdraw nBTC in
                exchange for mainnet <span class="small-caps">BTC</span>.</p
            >
            <p
                >We’re excited by the potential of the world’s hardest money within Cosmos and
                Terra. For instance, we expect Osmosis <span class="small-caps">BTC</span> pairs,
                DAOs and DeFi protocols using <span class="small-caps">BTC</span> as a reserve
                asset, and an easy on-ramp into the ecosystem because of Bitcoin’s wide availability
                and liquidity.</p
            >
            <p
                >To power this vision, we have designed a system that is more secure and
                permissionless than any other existing Bitcoin sidechain, joining proof-of-work and
                proof-of-stake to get the best of both worlds. By leveraging both Bitcoin’s hashrate
                and the Tendermint consensus protocol, the Nomic network is able to provide both
                high security and instant finality. It also creates a unique opportunity for
                proof-of-stake validators to earn <span class="small-caps">BTC</span> rewards.</p
            >
            <h2 id="network-launch">Network Launch</h2>
            <p
                >To launch Nomic, we’ll be rolling out the network in phases over the coming
                months.</p
            >
            <h3 id="phase-1-stakenet">Phase 1: Stakenet</h3>
            <p><strong>Date:</strong> January 31, 2022</p>
            <p
                >The Stakenet bootstraps the network by releasing the
                <span class="small-caps">NOM</span> staking token via an airdrop to
                <span class="small-caps">ATOM</span> holders and stakers, allowing them to stake
                <span class="small-caps">NOM</span> and begin accumulating rewards. The bridge
                functionality and <span class="small-caps">NOM</span> token transfers are disabled
                during this phase to allow launching in a controlled way where the impact of
                potential issues is minimized.</p
            >
            <h3 id="phase-2-interchain-upgrade">Phase 2: Interchain Upgrade</h3>
            <p><strong>Date:</strong> February or March 2022</p>
            <p
                >The first upgrade of the network will connect Nomic to other Cosmos chains (via
                <span class="small-caps">IBC</span>), and to the Bitcoin blockchain (via our bridge
                protocol). This will be a key milestone for the Cosmos ecosystem since Nomic will be
                the first <span class="small-caps">IBC</span> network not based on the Cosmos
                <span class="small-caps">SDK</span>, and the Bitcoin blockhain will officially
                become part of The Interchain.</p
            >
            <p
                ><span class="small-caps">NOM</span> token transfers will also be enabled at this
                point (both locally and over <span class="small-caps">IBC</span>) - however, nBTC
                will still not be available for deposit or withdrawal.</p
            >
            <h3 id="phase-3-full-bitcoin-bridge">Phase 3: Full Bitcoin Bridge</h3>
            <p><strong>Date:</strong> March or April 2022</p>
            <p
                >In this upgrade, the network will fully enable the Bitcoin Bridge, allowing anyone
                to deposit <span class="small-caps">BTC</span> in exchange for nBTC, and withdraw
                nBTC in exchange for <span class="small-caps">BTC</span>. nBTC will also be
                available to move over <span class="small-caps">IBC</span>, so at this point we
                expect <span class="small-caps">BTC</span> to instantly be utilized in Osmosis pools
                and other protocols.</p
            >
            <p
                >We’re excited to see all the potential that can be unlocked at this point when
                Bitcoin becomes a key part of the Cosmos and Terra ecosystems.</p
            >
            <h2 id="airdrop-details">Airdrop Details</h2>
            <p
                >The Stakenet launch includes an airdrop to
                <span class="small-caps">ATOM</span> holders and stakers in order to begin
                circulating the <span class="small-caps">NOM</span> staking token.</p
            >
            <p><strong>Eligibility:</strong></p>
            <ul>
                <li
                    ><span class="small-caps">ATOM</span> holders/stakers with balance of at least
                    1.5 <span class="small-caps">ATOM</span></li
                >
                <li
                    >Snapshot: Cosmos block 9,150,000 (Jan 21st, 2022 at 11:22:43
                    <span class="small-caps">UTC</span>)</li
                >
            </ul>
            <p><strong>Distribution:</strong></p>
            <ul>
                <li>Total amount: 3,500,000 <span class="small-caps">NOM</span></li>
                <li
                    >Formula:
                    <ul>
                        <li
                            ><code
                                >(min(liquidBalance, 1000) + (4 * min(stakedBalance, 1000))) /
                                20.299325</code
                            ></li
                        >
                        <li
                            >(A 1000 <span class="small-caps">ATOM</span> cap on both liquid balance
                            and staked balance, with a 4x multiplier on staked balance)</li
                        >
                    </ul></li
                >
                <li>Decay: linear decay beginning 1 month after launch of nBTC</li>
            </ul>
            <p
                ><strong
                    >Claim the airdrop and begin staking <span class="small-caps">NOM</span> in the
                    Nomic web app:
                    <a href="https://app.nomic.io" class="uri">https://app.nomic.io</a> (the Keplr
                    Chrome extension is required).</strong
                ></p
            >
            <p
                ><strong
                    >Note that staking rewards will not start accumulating until Feb 1, 20:40
                    <span class="small-caps">UTC</span></strong
                >.</p
            >
            <p
                >Two more airdrops are planned for the coming months - see the tokenomics section
                below.</p
            >
            <h2 id="tokenomics">Tokenomics</h2>
            <p
                >The <span class="small-caps">NOM</span> token is used to power the proof-of-stake
                security of the Nomic network.</p
            >
            <p
                >The <span class="small-caps">NOM</span> distribution is modelled after the
                <span class="small-caps">OSMO</span> token. The network will start with a supply of
                21,000,000 <span class="small-caps">NOM</span>, and the maximum supply after 9 years
                of inflation is 210,000,000 <span class="small-caps">NOM</span> (as an homage to
                Bitcoin’s 21,000,000 <span class="small-caps">BTC</span>).</p
            >
            <h3 id="initial-distribution">Initial Distribution</h3>
            <p><strong>Total:</strong> 21,000,000 <span class="small-caps">NOM</span></p>
            <ul>
                <li><strong>Airdrop I</strong> - 3,500,000 <span class="small-caps">NOM</span></li>
            </ul>
            <p
                >Targeting <span class="small-caps">ATOM</span> holders and stakers - see details
                above.</p
            >
            <ul>
                <li
                    ><strong
                        >Reserve for Airdrops <span class="small-caps">II</span> &amp;
                        <span class="small-caps">III</span></strong
                    >
                    - 7,000,000 <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >Details for these airdrops are <span class="small-caps">TBA</span> and will be
                included in the upcoming network upgrades. Until then, these tokens are reserved but
                not in circulation.</p
            >
            <ul>
                <li
                    ><strong>Strategic Reserve</strong> - 10,500,000
                    <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >Based on standards from $<span class="small-caps">OSMO</span> and other Cosmos
                projects, the strategic reserve is used to create strategic partnerships for Nomic.
                It is held in a multisig by the directors of the Nomic
                <span class="small-caps">DAO</span> Foundation and is strictly for the purpose of
                achieving the long-term goals of Nomic. It will not be used to market sell and
                strategic partners will be subject to vesting periods. All funds raised from the
                Strategic Reserve will be used to fund Nomic’s development efforts.</p
            >
            <p
                >At the discretion of the multisig members, the reserve may also be used to delegate
                to validators who are providing high value services to Nomic, such as operating
                infrastructure like block explorers and relayers, or contributing open source
                tooling/resources to the ecosystem. In order to maintain decentralization of the
                network, the strategic reserve will not<span class="push-double"></span>
                <span class="pull-double">“</span>overstake” such to have a controlling share of the
                network.</p
            >
            <h3 id="inflation-schedule">Inflation Schedule</h3>
            <p
                ><strong>Total Distributed After Genesis:</strong> 189,000,000
                <span class="small-caps">NOM</span></p
            >
            <p
                ><span class="small-caps">NOM</span> will be distributed over 9 years, reducing the
                inflation rate by 1/3 each year.</p
            >
            <p
                >Inflation begins 24 hours after the launch of the Stakenet - Feb 1, 2022 at 20:40
                <span class="small-caps">UTC</span>. This gives the community time to make
                delegations so that the initial validators do not receive an unfair advantage for
                claiming the staking rewards.</p
            >
            <ul>
                <li
                    ><strong>Staking Rewards</strong> - 47,250,000
                    <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >Rewards will be distributed to <span class="small-caps">NOM</span> validators and
                delegators in a similar fashion to other Cosmos chains.</p
            >
            <ul>
                <li
                    ><strong>Protocol Incentives</strong> - 85,050,000
                    <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >This share of the <span class="small-caps">NOM</span> supply will be used for
                future incentives to be decided by governance or prposed in later upgrades. For
                instance, potential incentives could be paid to nBTC holders or liquidity providers
                for <span class="small-caps">NOM</span> or nBTC pools on Osmosis.</p
            >
            <p
                >Since no protocol incentives will be active at the Stakenet launch, emitted
                <span class="small-caps">NOM</span> will accumulate into a pool to be distributed
                later.</p
            >
            <ul>
                <li
                    ><strong>Developer Vesting</strong> - 47,250,000
                    <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >The developer share will be distributed over time to the Nomic team. Note that
                since the network is decentralized, in the event the Nomic team is no longer the
                primary contributor to development, the developer share can be redirected to vest to
                other teams or individuals.</p
            >
            <ul>
                <li
                    ><strong>Community Pool</strong> - 9,450,000
                    <span class="small-caps">NOM</span></li
                >
            </ul>
            <p
                >A share of <span class="small-caps">NOM</span> will be collected into a pool which
                can be spent by network governance. The Stakenet phase will not include a mechanism
                to spend these funds, so they will accumulate until a later upgrade which adds a
                governance system (e.g.&nbsp;futarchy).</p
            >
            <h2 id="long-term-vision">Long-Term Vision</h2>
            <p
                >Nomic has been under development since 2018 by early Cosmos employees, and while it
                may at first seem similar in many ways to other Cosmos chains, it has fundamentally
                different <span class="small-caps">DNA</span>. Other chains are based on the Cosmos
                <span class="small-caps">SDK</span>, a standard framework which has many strengths
                but also its own weaknesses. Nomic uses Tendermint consensus, but is otherwise built
                on a completely <a href="https://github.com/nomic-io/orga">custom stack</a> written
                in the Rust language with a focus on performance and the ability to develop new
                features quickly.</p
            >
            <p
                >While the Nomic Bitcoin Bridge is a valuable product on its own, we see it as a
                building block for future projects. The real long-term focus of Nomic is to build
                innovative DAOs, which we believe are the most important new idea in the crypto
                space with potential that has yet to be unlocked. We hope that you will join us in
                our mission by participating in the Nomic network over the coming years as we push
                to outcompete the other platforms and projects in the crypto space.</p
            >
            <h2 id="how-to-participate">How to Participate</h2>
            <ul>
                <li
                    >Claim the airdrop and delegate <span class="small-caps">NOM</span>:
                    <a href="https://app.nomic.io" class="uri">https://app.nomic.io</a> (the Keplr
                    Chrome extension is required)</li
                >
                <li
                    >Run a Stakenet full node or become a validator:
                    <a href="https://github.com/nomic-io/nomic#readme" class="uri"
                        >https://github.com/nomic-io/nomic#readme</a
                    ></li
                >
                <li
                    >Join the community:
                    <ul>
                        <li><a href="https://t.me/nomicbtc">Telegram</a></li>
                        <li><a href="https://discord.gg/tN9rJvdwGh">Discord</a></li>
                    </ul></li
                >
                <li>Follow on Twitter: <a href="https://twitter.com/nomicbtc">@nomicbtc</a></li>
            </ul>

            <small>Posted on January 31, 2022</small>

            <br /><br />
        </div>
    </div>
</template>
