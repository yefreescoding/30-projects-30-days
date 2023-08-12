# NFT Store Card Component

This is a custom card component designed for an online store that specializes in selling NFTs (Non-Fungible Tokens). The component has been created using HTML, CSS, and Vanilla JavaScript, providing a visually appealing and interactive card for showcasing NFTs.

## Features

- **Eye-catching Design:** The card boasts an attention-grabbing design that effectively highlights the uniqueness of the NFT being showcased.

- **Responsive:** The component is fully responsive, ensuring a seamless experience across various devices and screen sizes.

- **Interactive Elements:** Interactive buttons and hover effects enhance the user experience, making the card engaging and user-friendly.

- **Customizable:** The CSS styles can be easily customized to match the branding and aesthetic preferences of the online store.

## How to Use

1. **Include CSS and JavaScript:** Link the provided CSS and JavaScript files in your HTML document.

2. **HTML Structure:** Create an HTML structure for the card, utilizing the provided classes and IDs.

```html
<article
  class="nft_container__article"
  aria-labelledby="NFT articles. Title, description, price"
>
  <div class="nft_container__img" data-tilt data-tilt-reverse="true">
    <img class="nft_img" src="images/image-equilibrium.jpg" alt="" />
  </div>
  <div class="nft_container__info">
    <h2>Equilibrium #3429</h2>
    <p>Our Equilibrium collection promotes balance and calm.</p>
    <div class="nft_container__sale">
      <div class="nft_container__price">
        <img src="images/icon-ethereum.svg" alt="Icono de Ethereum" />
        <span>0.041 ETH</span>
      </div>
      <div class="nft_container__time time-info">
        <img src="images/icon-clock.svg" alt="tiempo logo" />
        <span>3 days left</span>
      </div>
    </div>
    <div class="nft_container__creator creator-info-div">
      <div class="creator_avatar image-avatar">
        <img src="images/image-avatar.png" alt="logo avatar" />
      </div>
      <p>Creation of <span class="name_creator">Jules Wyvern</span></p>
    </div>
  </div>
</article>
```

3. **Customize:** Adjust the content, such as the image source, title, description, and button text, according to the specific NFT you are showcasing.

4. **Enhance Interactivity (Optional):** The provided JavaScript can be extended to add more interactive features if desired.

## Example

To see the NFT Store Card Component in action, refer to the `index.html` file included in this repository. Simply open it in a web browser to preview the card.

Feel free to modify and integrate the component into your online store to create an engaging and visually appealing NFT shopping experience.

**Note:** The images used in the example are for demonstration purposes only and should be replaced with actual NFT images.

## License

This component is distributed under the [MIT License](LICENSE), allowing you to freely use and modify it for your projects.
