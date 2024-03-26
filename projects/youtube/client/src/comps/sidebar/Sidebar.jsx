import React from "react";
import "../../css/App.css";

const Sidebar = () => {
  return (
    <div>
      <div
        className="w-[229px] z-50 overflow-scroll h-[100vh] bg-white fixed top-0 bottom-0 left-0 right-0 sidebar mt-[56px]"
        id="sidebar"
      >
        <div className="main-head-li p-[12px]">
          <div className="head-li px-[12px] py-[9px] flex items-center bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </g>
            </svg>
            <h4 className="text-[14px]">Home</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg>
            <h4 className="text-[14px]">Shorts</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
            <i className=""></i>
            <h4 className="text-[14px]">Subscriptions</h4>
          </div>
        </div>

        <div className="main-body-li p-[12px]">
          <h3 className="text-black ps-[12px]">
            You <i className="fa-solid fa-chevron-right text-[12px]"></i>
          </h3>
          <div className="head-li px-[12px] py-[9px] flex items-center hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <i className="fa-light fa-address-book text-[18px] w-[46px]"></i>
            <h4 className="text-[14px]">Your channel</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <i className="fa-light fa-history text-[18px] w-[46px]"></i>
            <h4 className="text-[14px]">History</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <i className="fa-light fa-play  text-[18px] w-[46px]"></i>
            <i className=""></i>
            <h4 className="text-[14px]">Your videos</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <i className="fa-light fa-clock text-[18px] w-[46px]"></i>
            <h4 className="text-[14px]">Watch Later</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <i className="fa-light fa-thumbs-up text-[18px] w-[46px]"></i>
            <h4 className="text-[14px]">Liked videos</h4>
          </div>
        </div>

        <div className="main-body-li p-[12px]">
          <h3 className="text-black ps-[12px]">Subscriptions</h3>
          <div className="head-li px-[12px] py-[9px] flex items-center hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_k5bEOtvQDarJKIcd16L9rC12P-zndm7J2Qhngt6A=s88-c-k-c0x00ffffff-no-rj"
              className="w-[24px] rounded-full mr-[22px]"
              alt=""
            />
            <h4 className="text-[14px]">Anshu Bisht</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <img
              src="https://yt3.ggpht.com/-yuxyhJfL9RG54q-Cgjarp6cQBPBAVfuDVaX9JLwQgLLrPYHk9rYj4RehbEOHhQ__ykWmIbL=s88-c-k-c0x00ffffff-no-rj"
              className="w-[24px] rounded-full mr-[22px]"
              alt=""
            />
            <h4 className="text-[14px]">Pokémon Asia</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_mmF9tjJ43ffPs69lLvRfDNOfW7jpDrBdlGtohUkQ=s88-c-k-c0x00ffffff-no-rj"
              className="w-[24px] rounded-full mr-[22px]"
              alt=""
            />
            <h4 className="text-[14px]">YesSmartyPie</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <img
              src="https://yt3.ggpht.com/klJUoD0r7esWNDeAk-t-czsMNWDaQK1W9DE2D3PSJ1_fQE38rbB5BjWA1gesYfzy6AONGk5FeqU=s88-c-k-c0x00ffffff-no-rj"
              className="w-[24px] rounded-full mr-[22px]"
              alt=""
            />
            <h4 className="text-[14px]">Anshu Bisht Vlogs</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_mcQd_-80PClfpO5uyXQYFbFEVwP96YLTgIUBSNjQ=s88-c-k-c0x00ffffff-no-rj"
              className="w-[24px] rounded-full mr-[22px]"
              alt=""
            />
            <h4 className="text-[14px]">Ezio18rip</h4>
          </div>
        </div>

        <div className="main-body-li p-[12px]">
          <h3 className="text-black ps-[12px]">Explore</h3>
          <div className="head-li px-[12px] py-[9px] flex items-center hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
            </svg>
            <h4 className="text-[14px]">Trending</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
            </svg>
            <h4 className="text-[14px]">Shopping</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
            </svg>
            <h4 className="text-[14px]">Music</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
            </svg>
            <h4 className="text-[14px]">Films</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <g>
                <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
              </g>
            </svg>
            <h4 className="text-[14px]">Live</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
            </svg>
            <h4 className="text-[14px]">Gaming</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
            </svg>
            <h4 className="text-[14px]">News</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
            </svg>
            <h4 className="text-[14px]">Sports</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
            </svg>
            <h4 className="text-[14px]">Learning</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
            </svg>
            <h4 className="text-[14px]">Fashion & Beauty</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
            </svg>
            <h4 className="text-[14px]">Podcasts</h4>
          </div>
        </div>

        <div className="main-body-li p-[12px]">
          <h3 className="text-black ps-[12px]">More from YouTube</h3>
          <div className="head-li px-[12px] py-[9px] flex items-center hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <defs>
                <radialGradient
                  cx="5.4%"
                  cy="7.11%"
                  r="107.93%"
                  fx="5.4%"
                  fy="7.11%"
                  gradientTransform="matrix(.70653 0 0 1 .016 0)"
                >
                  <stop offset="0%" stop-color="#FFF"></stop>
                  <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path d="M1 1h21.77v22H1z"></path>
                <g fill-rule="nonzero">
                  <path
                    fill="#F00"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                  ></path>
                  <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                  <path
                    fill="#000"
                    fill-opacity=".12"
                    d="M9.68 8.88l5.13 3.48.73-.38"
                  ></path>
                  <path
                    fill="#FFF"
                    fill-opacity=".2"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                  ></path>
                  <path
                    fill="#3E2723"
                    fill-opacity=".2"
                    d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                  ></path>
                  <path
                    fill="#FFF"
                    fill-opacity=".2"
                    d="M9.68 15.08v.1l5.84-3.08v-.12"
                  ></path>
                  <path
                    fill="#3E2723"
                    fill-opacity=".2"
                    d="M9.68 8.9v-.13l5.84 3.1v.1"
                  ></path>
                  <path
                    fill="url(#a_yt99)"
                    fill-opacity=".1"
                    d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                    transform="translate(1 4.208)"
                  ></path>
                </g>
              </g>
            </svg>
            <h4 className="text-[14px]">YouTube Premium</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path
                fill="red"
                d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
              ></path>
              <path
                fill="#fff"
                d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
              ></path>
              <path
                fill="red"
                d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
              ></path>
              <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path>
            </svg>
            <h4 className="text-[14px]">YouTube Studio</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
              ></path>
            </svg>
            <h4 className="text-[14px]">YouTube Music</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
              ></path>
              <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
              ></path>
              <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
              ></path>
              <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
              ></path>
            </svg>
            <h4 className="text-[14px]">YouTube Kids</h4>
          </div>
        </div>

        <div className="main-body-li p-[12px]">
          <div className="head-li px-[12px] py-[9px] flex items-center hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
            </svg>
            <h4 className="text-[14px]">Settings</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            ><path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path></svg>
            <h4 className="text-[14px]">Report history</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
            </svg>
            <h4 className="text-[14px]"> Help</h4>
          </div>
          <div className="head-li px-[12px] py-[9px] flex items-center rounded-lg hover:bg-[rgba(0,0,0,0.05)]">
            <svg
              className="mr-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
            </svg>
            <h4 className="text-[14px]"> Send feedback</h4>
          </div>
        </div>

        <div className="footer-area pb-[60px] mt-[12px]">
          <div className="footer-top px-[24px]">
            <p className="text-[13px] text-slate-600 font-semibold">
              About   Press  Copyright Contactus Creator Advertise Developers
            </p>
          </div>
          <div className="footer-bottom px-[24px] mt-[12px]">
            <p className="text-[13px] text-slate-600 font-semibold">
              Terms Privacy Policy & Safety How YouTube works Test new features
            </p>
          </div>
          <div className="footer-copy-right   px-[24px] mt-[12px]">
            <p className="text-[12px] text-slate-600 font-light">
              © 2024 Google LLC
            </p>
          </div>
        </div>
      </div>

      <div className="w-[68px] bg-white h-[100vh] fixed top-0 bottom-0 left-0 right-0 sidebar-min mt-[56px]">
        <ul className="sidebar-min-ul">
          <li className="sidebar-min-li w-[60px] h-[70px] flex flex-col justify-center m-1  hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px] ml-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g>
            </svg>
            <p className="text-[10px] text-center pt-1">Home</p>
          </li>
          <li className="sidebar-min-li w-[60px] h-[70px] flex flex-col justify-center m-1  hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px] ml-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg>
            <p className="text-[10px] text-center pt-1">Shorts</p>
          </li>
          <li className="sidebar-min-li w-[60px] h-[70px] flex flex-col justify-center m-1  hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px] ml-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
            <p className="text-[10px] text-center pt-1">Subscriptions</p>
          </li>
          <li className="sidebar-min-li w-[60px] h-[70px] flex flex-col justify-center m-1  hover:bg-[rgba(0,0,0,0.05)] rounded-lg">
            <svg
              className="mr-[22px] ml-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "24px",
                height: "24px",
              }}
            >
              <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
            </svg>
            <p className="text-[10px] text-center pt-1">You</p>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default Sidebar;
