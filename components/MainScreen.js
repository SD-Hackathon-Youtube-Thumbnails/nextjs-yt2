// components/MainScreen.js
import { useState } from "react";
import { useRouter } from "next/router";

const MainScreen = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://datawb.com/generate.php", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    setLoading(false);
    router.push({
      pathname: "/bgselect",
      query: { bgData: JSON.stringify(data) },
    });
  };

  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-style-mode" content={1} />{" "}
        {/* 0 == light, 1 == dark */}
        <title>
          YouTube Thumbnails - Instantly Generate Eye-Catching AI Youtube
          Thumbnails
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
        {/* CSS ============================================ */}
        <link rel="stylesheet" href="assets2/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="assets2/css/plugins/animation.css" />
        <link rel="stylesheet" href="assets2/css/plugins/feature.css" />
        <link rel="stylesheet" href="assets2/css/plugins/magnify.min.css" />
        <link rel="stylesheet" href="assets2/css/plugins/slick.css" />
        <link rel="stylesheet" href="assets2/css/plugins/slick-theme.css" />
        <link rel="stylesheet" href="assets2/css/plugins/lightbox.css" />
        <link rel="stylesheet" href="assets2/css/style.css" />
        <main className="page-wrapper">
          {/* Start Header Area  */}
          <header className="rainbow-header header-default header-not-transparent header-sticky">
            <div className="container position-relative">
              <div className="row align-items-center row--0">
                <div className="col-lg-3 col-md-6 col-4">
                  <div className="logo">
                    <a href="/">
                      <img
                        className="logo-light"
                        src="assets2/images/logo/logo.png"
                        alt="Corporate Logo"
                      />
                      <img
                        className="logo-dark"
                        src="assets2/images/logo/logo-dark.png"
                        alt="Corporate Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-6 col-8 position-static">
                  <div className="header-right">
                    <nav className="mainmenu-nav d-none d-lg-block">
                      <ul className="mainmenu">
                        {/* <li><a href="https://blog.easyai.studio/">Blog</a></li>
                              <li><a href="#pricing">Pricing</a></li>
                              <li><a href="#testimonial">Testimonial</a></li> */}
                        <li>
                          <a href="https://blog.easyai.studio/contact/">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                    {/* Start Header Btn  */}
                    <div className="header-btn">
                      <a
                        className="btn-default btn-small round"
                        target="_blank"
                        href="https://easyai.studio/sign-in"
                      >
                        Sign In
                      </a>
                    </div>
                    {/* End Header Btn  */}
                    {/* Start Mobile-Menu-Bar */}
                    <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                      <div className="hamberger">
                        <button className="hamberger-button">
                          <i className="feather-menu" />
                        </button>
                      </div>
                    </div>
                    {/* Start Mobile-Menu-Bar */}
                    <div id="my_switcher" className="my_switcher">
                      <ul>
                        <li>
                          <a
                            href="javascript: void(0);"
                            data-theme="light"
                            className="setColor light"
                          >
                            <img
                              className="sun-image"
                              src="assets2/images/icons/sun-01.svg"
                              alt="Sun images"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript: void(0);"
                            data-theme="dark"
                            className="setColor dark"
                          >
                            <img
                              className="Victor Image"
                              src="assets2/images/icons/vector.svg"
                              alt="Vector Images"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* End Header Area  */}
          <div className="popup-mobile-menu">
            <div className="inner">
              <div className="header-top">
                <div className="logo">
                  <a href="/">
                    <img
                      className="logo-light"
                      src="assets2/images/logo/logo.png"
                      alt="Corporate Logo"
                    />
                    <img
                      className="logo-dark"
                      src="assets2/images/logo/logo-dark.png"
                      alt="Corporate Logo"
                    />
                  </a>
                </div>
                <div className="close-menu">
                  <button className="close-button">
                    <i className="feather-x" />
                  </button>
                </div>
              </div>
              <ul className="mainmenu">
                <li>
                  <a href="https://blog.easyai.studio/">Blog</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="https://blog.easyai.studio/contact/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Start Theme Style  */}
          <div>
            <div className="rainbow-gradient-circle" />
            <div className="rainbow-gradient-circle theme-pink" />
          </div>
          {/* End Theme Style  */}
          {/* Start Slider Area  */}
          <div
            className="slider-area slider-style-8 height-650"
            style={{ height: 450 }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner text-center">
                    {/* <span class="subtitle theme-gradient">Hello! This is WebAgency</span> */}
                    <h1 className="title">
                      Instantly{" "}
                      <span className="theme-gradient">
                        Generate Eye-Catching
                      </span>
                      <br />
                      Youtube Thumbnails
                    </h1>
                    {/* <p class="description">Easy AI Studio offers cutting-edge AI Solutions that empower <br> businesses and individuals to achieve 10x productivity. </p> */}
                    <form
                      action="/generate-thumbnail"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group mt--5">
                        <label htmlFor="video-title" className="sr-only">
                          YouTube Video Title or Topic:
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="form-control"
                          placeholder="Enter your YouTube video title or topic"
                          required=""
                        />
                      </div>
                      <div className="button-group mt--5">
                        <button
                          type="submit"
                          className="btn-default btn-large round"
                          disabled={loading}
                        >
                          Generate <i className="feather-arrow-right" />
                        </button>
                      </div>
                    </form>
                    {loading && (
                      <div>
                        {/* Replace this div with your preferred spinner component */}
                        <p>Loading...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Slider Area  */}
          {/* Start Main Counter up-5 Area  */}
          <div className="rainbow-counterup-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="thumbnail" onclick="location.href='/sign-up'">
                    <img
                      className="radius w-100"
                      src="assets2/images/thumb.png"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Footer Area  */}
          <footer className="rainbow-footer footer-style-default variation-two">
            <div className="rainbow-callto-action clltoaction-style-default style-7">
              <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                  <div className="col-lg-8 col-md-8">
                    <div className="inner">
                      <div className="content text-left">
                        <div className="logo">
                          <a href="/">
                            <img
                              className="logo-light"
                              src="assets2/images/logo/logo.png"
                              alt="Corporate Logo"
                            />
                            <img
                              className="logo-dark"
                              src="assets2/images/logo/logo-dark.png"
                              alt="Corporate Logo"
                            />
                          </a>
                        </div>
                        <h4 className="main-title">
                          Start With EasyAi Studio Today, Speed Up Development!
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4"
                    data-sal="slide-up"
                    data-sal-duration={400}
                    data-sal-delay={150}
                  >
                    <div className="call-to-btn text-left mt_sm--20 text-lg-right">
                      <a
                        className="btn-default"
                        href="https://easyai.studio/sign-up"
                      >
                        Get Started Now
                        <i className="feather-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="footer-top"
              style={{ paddingTop: 50, paddingBottom: 50 }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">Services</h4>
                      <div className="inner">
                        <ul className="footer-link link-hover">
                          {/* <li><a href="about.html">About</a></li>
                                  <li><a href="portfolio.html">Portfolio</a></li> */}
                          <li>
                            <a href="https://blog.easyai.studio/contact/">
                              Contact
                            </a>
                          </li>
                          {/* <li><a href="service.html">Service</a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">Company</h4>
                      <div className="inner">
                        <ul className="footer-link link-hover">
                          <li>
                            <a href="#pricing">Pricing</a>
                          </li>
                          {/* <li><a href="tab.html">Tab Styles</a></li>
                                  <li><a href="service.html">Service</a></li>
                                  <li><a href="social-share.html">Social</a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">Resources</h4>
                      <div className="inner">
                        <ul className="footer-link link-hover">
                          {/* <li><a href="team.html">Team</a></li> */}
                          <li>
                            <a href="#testimonial">Testimonial</a>
                          </li>
                          {/* <li><a href="service.html">Service</a></li>
                                  <li><a href="timeline.html">Timeline</a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">Stay Connected</h4>
                      <div className="inner">
                        {/* <h6 class="subtitle">2000+ Our clients are subscribe Around the World</h6> */}
                        <ul className="social-icon social-default justify-content-start">
                          <li>
                            <a href="https://www.facebook.com/EasyaiStudio">
                              <i className="feather-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/@easyaistudio">
                              <i className="feather-youtube" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/EasyaiStudio">
                              <i className="feather-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/easyai.studio/">
                              <i className="feather-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/yupin-nu-4b053a22a/">
                              <i className="feather-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/EasyAiStudio">
                              <i className="feather-github" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.reddit.com/user/EasyAiStudio">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-reddit"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14zl1 -5l6 1m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0m-9 9m-.5 0a0.5 .5 0 1 0 1 0a0.5 .5 0 1 0 -1 0m6.5 0m-.5 0a0.5 .5 0 1 0 1 0a0.5 .5 0 1 0 -1 0m-4.5 4c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.tiktok.com/@easyai.studio?lang=en">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-tiktok"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* End Footer Area  */}
          {/* Start Copy Right Area  */}
          <div className="copyright-area copyright-style-one">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                  <div className="copyright-left">
                    <ul className="ft-menu link-hover">
                      <li>
                        <a href="/privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/terms">Terms And Condition</a>
                      </li>
                      <li>
                        <a href="https://blog.easyai.studio/contact/">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                  <div className="copyright-right text-center text-lg-end">
                    <p className="copyright-text">© YouTube Thumbnails 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Copy Right Area  */}
        </main>
        {/* All Scripts  */}
        {/* Start Top To Bottom Area  */}
        <div className="rainbow-back-top">
          <i className="feather-arrow-up" />
        </div>
        {/* End Top To Bottom Area  */}
        {/* JS
============================================ */}
      </>
    </div>
  );
};

export default MainScreen;
