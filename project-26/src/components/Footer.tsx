export const Footer = () => {
  return (
    <footer>
      <div className="relative h-[100dvh] overflow-hidden">
        <div className="bg-linear-to-b from-gray-100 via-gray-100/50 to-gray-100/0 absolute top-0 w-full h-[30%] px-4 py-8 flex items-start">
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            <img src="images/logo.svg" alt="logo" className="logo" />
            <h2 className="text-green-900/80 uppercase font-black md:text-3xl">
              Best Bank for your life.
            </h2>
          </div>
        </div>
        <div className="w-full h-full bg-blue-600">
          <img
            className="w-full h-full object-cover object-bottom"
            src="images/footer-hero-5.jpg"
            alt="footer-cover"
          />
        </div>
        <div className="bg-linear-to-t from-gray-900 via-gray-900/80 to-gray-100/0 absolute bottom-0 w-full h-[45%] px-6 py-8 flex items-end">
          <div className="w-full flex flex-wrap items-start gap-4">
            <article className="flex-2 min-w-[300px]">
              <h3 className="text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500">
                Menu
              </h3>
              <ul className="footer_links flex flex-col text-sm md:text-lg text-gray-400">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </article>
            <article className="flex-1 min-w-[300px]">
              <h3 className="text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500">
                Socials
              </h3>
              <ul className="footer_links flex flex-col text-sm md:text-lg text-gray-400">
                <li>
                  <a href="#">X</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Apple Podcast</a>
                </li>
                <li>
                  <a href="#">Spotify</a>
                </li>
              </ul>
            </article>
            <article className="flex-1 min-w-[300px]">
              <h3 className="text-gray-200 pb-2 mb-2 text-lg md:text-4xl font-semibold border-b-2 border-gray-500">
                Resources
              </h3>
              <ul className="footer_links flex flex-col text-sm md:text-lg text-gray-400">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Invite</a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div className="section bg-gray-900 text-white">
        <div className="attribution">
          Challenge by © Easybank. All Rights Reserved
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </footer>
  );
};
