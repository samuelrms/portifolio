import { SVGProps } from "react";

export const ProjectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 14h44v30a2 2 0 0 1-2 2H42a2 2 0 0 1-2-2v-6H24v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V14ZM24 30H10M24 14v24M40 30h14M40 14v24"
      stroke="#72FF4F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g filter="url(#a)">
      <circle
        cx={32}
        cy={34}
        r={20}
        fill="#72FF4F"
        fillOpacity={0.2}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={8}
        y={14}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_21_2891" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_21_2891"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
