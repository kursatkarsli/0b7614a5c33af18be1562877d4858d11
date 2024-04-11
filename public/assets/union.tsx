export const UnionIcon = ({ isIskbet }: { isIskbet: boolean }) => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.1192 4.89212C14.1158 4.56278 14.8351 3.6237 14.8351 2.51664C14.8351 1.13523 13.7152 0.0153809 12.3338 0.0153809C10.9524 0.0153809 9.83254 1.13523 9.83254 2.51664C9.83254 3.58722 10.5051 4.5007 11.4508 4.85759C9.08507 13.3907 4.69037 9.49892 3.28039 6.20383C3.89944 5.8249 4.31251 5.1424 4.31251 4.36342C4.31251 3.17255 3.34712 2.20716 2.15626 2.20716C0.965389 2.20716 0 3.17255 0 4.36342C0 5.49477 0.871301 6.42261 1.97948 6.51253C1.98093 6.52461 1.98283 6.53672 1.98519 6.54884L3.71629 15.4404C3.76202 15.6753 3.96777 15.8448 4.20708 15.8448H20.4605C20.6998 15.8448 20.9056 15.6753 20.9513 15.4404L22.6824 6.54884C22.6843 6.53911 22.6859 6.52938 22.6872 6.51967C23.8765 6.51783 24.8401 5.55315 24.8401 4.36342C24.8401 3.17255 23.8747 2.20716 22.6838 2.20716C21.493 2.20716 20.5276 3.17255 20.5276 4.36342C20.5276 5.07505 20.8723 5.70616 21.4039 6.09887C21.3935 6.11529 21.3839 6.13239 21.3753 6.15011C17.7967 13.5143 14.1895 8.79692 13.1192 4.89212ZM4.57127 16.8798C3.76148 16.8798 3.10501 17.5363 3.10501 18.3461C3.10501 19.1559 3.76147 19.8124 4.57126 19.8124H20.0963C20.9061 19.8124 21.5626 19.1559 21.5626 18.3461C21.5626 17.5363 20.9061 16.8798 20.0963 16.8798H4.57127Z"
      fill={isIskbet ? "yellow" : "white"}
    />
  </svg>
);
