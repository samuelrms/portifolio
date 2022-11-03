import { SVGProps } from "react";

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="72"
    height="64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 22 4 32l12 10M48 22l12 10-12 10M40 10 24 54"
      stroke="#72FF4F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g filter="url(#a)">
      <circle
        cx={52}
        cy={32}
        r={20}
        fill="#72FF4F"
        fillOpacity={0.2}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={28}
        y={12}
        width={48}
        height={48}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_21_2879" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_21_2879"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
