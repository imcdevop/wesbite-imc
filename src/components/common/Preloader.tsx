"use client";

import { useEffect, useState, useCallback } from "react";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const dismiss = useCallback(() => {
    if (isExiting || isHidden) return;
    setIsExiting(true);
    setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "";
    }, 600);
  }, [isExiting, isHidden]);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    // Auto-dismiss after animation completes (~1.8s)
    const timer = setTimeout(() => {
      dismiss();
    }, 1800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [dismiss]);

  if (!mounted || isHidden) return null;

  return (
    <div
      id="imc-preloader"
      onClick={dismiss}
      aria-label="Chargement IMC"
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-white cursor-pointer select-none transition-all duration-600 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        isExiting
          ? "opacity-0 scale-[1.02] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* ONLY the Animated IMC Logo */}
      <div className="w-[180px] sm:w-[220px] aspect-[1632/1216] relative">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1632 1216"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Official IMC Logo Gradient */}
            <linearGradient
              id="imcPreloadGrad"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5a86b6" />
              <stop offset="58%" stopColor="#00629b" />
              <stop offset="100%" stopColor="#004b88" />
            </linearGradient>

            {/* Specular Light Sweep */}
            <linearGradient
              id="imcSheenGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.75)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Exact Clip Path of the 7 Pillars */}
            <clipPath id="imcClip">
              <rect x="0.01" y="0" width="202.63" height="202.63" rx="3" />
              <rect x="0" y="301.85" width="202.91" height="913.92" rx="3" />
              <rect x="319.05" y="0" width="202.63" height="1215.75" rx="3" />
              <rect x="618.82" y="0" width="202.63" height="593.69" rx="3" />
              <rect x="910.25" y="0" width="202.62" height="1215.75" rx="3" />
              <rect x="1226.70" y="0" width="405.25" height="202.63" rx="3" />
              <rect x="1226.70" y="1011.59" width="405.25" height="202.63" rx="3" />
            </clipPath>
          </defs>

          {/* 7 Geometric Actors of IMC Wordmark */}
          <g fill="url(#imcPreloadGrad)">
            {/* 1. i - dot */}
            <rect
              className="anim-dot"
              x="0.01"
              y="0"
              width="202.63"
              height="202.63"
              rx="3"
            />
            {/* 2. i - stem */}
            <rect
              className="anim-stem"
              x="0"
              y="301.85"
              width="202.91"
              height="913.92"
              rx="3"
            />
            {/* 3. m - left column */}
            <rect
              className="anim-m-left"
              x="319.05"
              y="0"
              width="202.63"
              height="1215.75"
              rx="3"
            />
            {/* 4. m - mid drop column */}
            <rect
              className="anim-m-mid"
              x="618.82"
              y="0"
              width="202.63"
              height="593.69"
              rx="3"
            />
            {/* 5. m - right column / c spine */}
            <rect
              className="anim-m-right"
              x="910.25"
              y="0"
              width="202.62"
              height="1215.75"
              rx="3"
            />
            {/* 6. c - top bar */}
            <rect
              className="anim-c-top"
              x="1226.70"
              y="0"
              width="405.25"
              height="202.63"
              rx="3"
            />
            {/* 7. c - bottom bar */}
            <rect
              className="anim-c-bottom"
              x="1226.70"
              y="1011.59"
              width="405.25"
              height="202.63"
              rx="3"
            />
          </g>

          {/* Subtle light sweep across logo */}
          <g clipPath="url(#imcClip)">
            <rect
              className="anim-glint"
              x="-250"
              y="-100"
              width="300"
              height="1500"
              fill="url(#imcSheenGrad)"
            />
          </g>
        </svg>
      </div>

      {/* Pure, Minimalist Motion Keyframes */}
      <style jsx>{`
        @keyframes animDot {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.7);
          }
          40% {
            opacity: 1;
            transform: translateY(4px) scale(1.04);
          }
          65%,
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes animScaleYTop {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          30% {
            opacity: 1;
          }
          70%,
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes animScaleYBottom {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          30% {
            opacity: 1;
          }
          70%,
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes animScaleXLeft {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          30% {
            opacity: 1;
          }
          75%,
          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes animGlint {
          0% {
            opacity: 0;
            transform: translateX(-150%) skewX(-25deg);
          }
          40% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateX(260%) skewX(-25deg);
          }
        }

        .anim-dot {
          animation: animDot 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .anim-stem {
          transform-origin: 101px 301px;
          animation: animScaleYTop 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 60ms;
        }

        .anim-m-left {
          transform-origin: 420px 1216px;
          animation: animScaleYBottom 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 120ms;
        }

        .anim-m-mid {
          transform-origin: 720px 0px;
          animation: animScaleYTop 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 180ms;
        }

        .anim-m-right {
          transform-origin: 1011px 1216px;
          animation: animScaleYBottom 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 240ms;
        }

        .anim-c-top {
          transform-origin: 1226px 101px;
          animation: animScaleXLeft 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 300ms;
        }

        .anim-c-bottom {
          transform-origin: 1226px 1112px;
          animation: animScaleXLeft 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 350ms;
        }

        .anim-glint {
          animation: animGlint 0.75s cubic-bezier(0.4, 0, 0.2, 1) both;
          animation-delay: 650ms;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
