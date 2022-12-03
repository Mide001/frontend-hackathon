# ArtBloc 

**ArtBloc** is the bloc for the skilled and thriving creatives.

**ArtBloc** serves as a NFT marketplace for digital creators to enjoy a mix of Web3 decentralization and ownership functionalities in their artworks.

With **ArtBloc**, creators can mint their artworks as NFTs for proof, and also decide to sell the NFT in Fractions.

Creators can also fractionalize their art (if they choose to) and earn a wholesome amount all within **ArtBloc**.

> Project Live Link: 


## Project Features 

- Mint NFT as Digital Proof for your Artwork (in seconds)
- Total Control of NFT sale and Fractionalized tokens
- Artworks enjoy decentralized storage (via IPFS integration)
- Artlovers own a piece of the Art in Fractionalized NFTs.
- Profit Opportunities for Art Lovers
- Buy NFT fractions and trade-off within the same platform


## Our Building Process

In building this Project, we arrived at (not sure how you did, but here is a draft) the following pages for in the application:


1. A **Landing Page**, listing all the features of the platform and clarifications for end users;

2. A **Create page**, where Creatives get to upload their art after filling a form;

3. A **Mini-Marketplace**, where all the live tokens and NFTs are listed here for selling and trading.

4. An **Account Page**, where users get to see all their NFTs and can choose how they want to list their NFTs in the marketplace, choosing from two options, either publish as NFT or publish as a Fractionalized NFT - from the same page and even control the sale of these assets.



## Technologies Used
### Frontend
- Nextjs
- Photoshop
- Lighthouse - Store data permanently on IPFS after getting signed by the user 
https://lighthouse-1.gitbook.io/lighthouse-1/lighthouse-sdk/code-examples/browser-frontend/browser 
- nft.storage - store the details of the NFT on IPFS directly
- ThirdwebSDK - Used to integrate our frontend with the blockchain and the contracts and implement the functionality

### Back-end
- Solidity
- Thirdweb
- Hardhat 
- Eslint (Used earlier on to lint our code) 
- IPFS - as decentralized storage for art data
- Prettier Formatter


## Contracts 

The backend of our project thrives on 4 major solidity contracts:

- **NFTCollection.sol** - handles the minting of all the NFTs uploaded via the artists;
- **NFTFraction.sol** - handles the management and creation of all the new ERC20 tokens contracts for each NFT that is fractionalized
- **Token.sol** - enables the sale of tokens on **Artbloc** and the redemption of NFTs when certain conditions are satisfied
- **TokenNFT.sol** - handles the fractionalization of NFTs, converts ERC721 into ERC20 token, and controls the sale of token and NFT


## Challenges We ran into

1. **Team Building**: We encountered the initial issue of forming a team, which was a bit rigorous than we envisaged.
 
2. **Writing the Smart Contract**: We had challenges putting together the backend code and understanding how to integrate **thirdweb** extensions into our project.  

3. **Designing the UX**: In the purport of keeping our project well-designed and efficient, we had to choose between either implementing all our project's functionalities in single page or keep them separate - in distict pages, we chose the latter, because we believed it kept our project within the coding ethics of simplicity and design.

4. **Implementing the thirdweb web3 SDK**: After struggling with integrating our backend to our frontend app, we had to resort to researching on and implementing the  have used thirdweb for the first time so we ran into issue while configuring with the frontend SDK.

5. **Implementing the NFT Fraction logic and the marketplace**: Understanding how to integrate the NFTFraction concept and the marketplace idea was a bit challenging.

6. **Integrating nft.storage**: Being our first time, we also ran into some bugging issues whilst trying to integrate our project with nft.storage which enabled us store NFT details  on IPFS directly

7. **Extraneous Factors:** Outside the technical aspect of our project, Israel struggled with network issues (which would have had a big blow on our project) and Mide struggled to get work done with his slow-lagging PC.


## Team Members

[**Ogendengbe Israel**](https://twitter.com/techwithmide) 

[**Mide Sofek**](https://twitter.com/midesofek)
