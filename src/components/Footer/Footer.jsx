import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#189332] pt-24 px-5 overflow-hidden h-[600px]">
      <div className="mx-auto max-w-[90rem] flex flex-col items-end ">
        <div className="mb-24">
          <p className=" text-md text-white max-w-xl">
            If you have ideas for your brand, your business, or the world at
            large, we’re here to listen and collaborate. We can design a more
            human future together.
          </p>

          <Link href="/about" className="flex items-center mt-10">
            <p className="text-white text-sm font-semibold underline mr-1">
              Twitter
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8271 11.1303L12.7662 2.18427L4.15461 0.761549M12.0335 2.70673L1.33624 10.3345"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>

          <Link href="/about" className="flex items-center mt-2">
            <p className="text-white text-sm font-semibold underline mr-1">
              Instagram
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8271 11.1303L12.7662 2.18427L4.15461 0.761549M12.0335 2.70673L1.33624 10.3345"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>

          <Link href="/about" className="flex items-center mt-2">
            <p className="text-white text-sm font-semibold underline mr-1">
              Linkedin
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8271 11.1303L12.7662 2.18427L4.15461 0.761549M12.0335 2.70673L1.33624 10.3345"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <svg
          width="1414"
          height="559"
          viewBox="0 0 1414 559"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M925.814 277.748C892.991 306.674 879.445 322.843 845.34 350.138C753.452 423.665 663.568 500.411 561.048 559H112.097C44.8031 503.621 5.24544 422.204 1.39837 333.858C-3.76501 215.049 40.6078 122.991 138.177 55.9013C253.232 -23.2224 471.071 -20.0633 571.18 134.184C564.071 141.87 556.581 150.609 548.428 158.685C471.334 235.1 394.13 311.404 316.976 387.751C304.518 400.073 292.713 413.134 279.567 424.676C255.211 446.051 226.192 445.406 204.537 424.073C187.484 407.283 185.777 372.762 203.908 351.93C221.088 332.193 241.088 314.86 260.188 296.831C313.554 246.462 367.107 196.281 424.329 142.507C413.5 131 404.5 124.732 392.516 121.208C274.115 86.389 164.07 132.86 119.434 241.86C68.5309 366.163 164.546 517.922 298.692 524.988C367.931 528.631 430.8 508.258 490.306 478.339C563.961 441.312 629.539 391.785 691.279 336.609C757.758 277.205 791.668 251.804 860.151 194.659L925.814 277.748Z"
            fill="white"
          />
          <path
            d="M680.604 503.54V557.586H590.262L680.604 503.54Z"
            fill="white"
          />
          <path
            d="M1071.27 257.133V557.586H947.673V257.133C947.673 221.457 933.78 187.928 908.566 162.715C883.352 137.501 849.824 123.607 814.147 123.607C740.51 123.607 680.604 183.504 680.604 257.133V319.561L557.006 412.612V257.133C557.006 115.352 672.367 0 814.147 0C882.825 0 947.393 26.7511 995.97 75.3107C1044.52 123.879 1071.27 188.447 1071.27 257.133Z"
            fill="white"
          />
          <path
            d="M1414 257.133V557.586H1290.4V257.133C1290.4 221.457 1276.51 187.929 1251.29 162.715C1226.06 137.501 1192.53 123.607 1156.88 123.607C1133.08 123.607 1110.73 129.857 1091.36 140.813L1024.28 36.8911C1063.03 13.4945 1108.42 0.00854492 1156.88 0.00854492C1225.55 0.00854492 1290.12 26.7596 1338.68 75.3192C1387.25 123.887 1414 188.464 1414 257.133Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
