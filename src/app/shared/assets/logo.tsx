interface ILogo {
  onClick: () => void;
}

export const Logo = ({ onClick }: ILogo) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="35"
      fill="none"
      viewBox="0 0 60 35"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <path
        stroke="#72FF4F"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="3"
        d="M27.312 32.033L33.02 3.32M39.667 2l18.37 15.24a1 1 0 01-.028 1.563l-18.342 14.13M24.2 5.867L10.487 17.093a1 1 0 00.028 1.57L24.2 29.067"
      ></path>
      <path
        stroke="#72FF4F"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="3"
        d="M20.333 2L1.963 17.24a1 1 0 00.028 1.563l18.342 14.13M35.8 5.867l13.713 11.226a1 1 0 01-.029 1.57L35.8 29.067"
      ></path>
    </svg>
  );
};
