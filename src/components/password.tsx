/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

type PasswordType = {
  onClose?: any;
  loginTitle?: string;
  loginSubtext?: string;
  labelText?: string;
  loginType?: string;
  loginBtn?: string;
  otPlogin?: string;
  placeholder?: string;
  resend?: string;
};

const Password: NextPage<PasswordType> = ({
  onClose,
  loginTitle,
  loginSubtext,
  labelText,
  loginType,
  loginBtn,
  otPlogin,
  placeholder,
  resend,
}) => {
  return (
    <div className="text-mediumblue font-label-small-label relative box-border flex h-[567px] w-full flex-col items-center justify-start gap-[24px] rounded-2xl bg-white px-8 py-4 text-left text-xs">
      <div className="flex flex-row items-center justify-center gap-[24px] self-stretch text-base">
        <a
          className="font-inter relative flex w-[140px] shrink-0 items-center font-semibold leading-[31px] text-[inherit] [text-decoration:none]"
          href="#"
        >
          Back
        </a>
        <button
          className="flex flex-1 cursor-pointer flex-row items-start justify-end bg-transparent"
          onClick={onClose}
        >
          <img
            className="relative h-6 w-6 shrink-0 overflow-hidden"
            alt=""
            src="/assets/images/icons/cross.svg"
          />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-[16px] self-stretch text-5xl text-gray-100">
        <div className="font-inter relative self-stretch font-semibold leading-[31px]">
          {loginTitle}
        </div>
        <div className="font-inter relative self-stretch text-xs leading-[31px]">
          {loginSubtext}
        </div>
      </div>
      <div className="flex w-96 flex-col items-start justify-start gap-[16px] text-black">
        <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
          <div className="font-inter relative font-medium leading-[16px]">
            {labelText}
          </div>
          <div className="text-firebrick flex flex-col items-center justify-center gap-[8px] self-stretch text-2xs">
            <input
              className="font-inter font-label-small-label relative box-border flex h-12 flex-row items-center justify-between self-stretch rounded-[29px] border-[1px] border-solid border-text-gray-300 bg-[transparent] px-6 py-2 text-xs"
              type={loginType}
              defaultValue="Reset password"
              placeholder={placeholder}
            />
            <div className="absolute right-[15px]">
              {' '}
              <a
                href="#"
                className="font-inter relative self-stretch text-center font-semibold leading-[31px] text-mediumblue-100"
              >
                {resend}
              </a>
            </div>
            <div className="hidden w-[310px] flex-row items-center justify-start gap-[4px]">
              <img
                className="relative h-[15px] w-[15px] shrink-0 overflow-hidden"
                alt=""
                src="/icsharpcancel.svg"
              />
              <div className="font-inter relative tracking-[-0.02em]">
                Password cannot be less than 6 characters
              </div>
            </div>
          </div>
        </div>
        <button className="bg-mediumblue relative h-12 shrink-0 cursor-pointer self-stretch overflow-hidden rounded-[32px] p-0 mix-blend-normal [border:none]">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img
              className="relative hidden h-6 w-6 shrink-0 overflow-hidden"
              alt=""
              src="/icons1.svg"
            />
            <div className="relative text-center text-base font-medium text-white">
              {loginBtn}
            </div>
          </div>
        </button>
      </div>
      <a
        className="font-inter relative self-stretch text-center font-semibold leading-[31px] text-mediumblue-100 [text-decoration:none]"
        href="#"
      >
        {otPlogin}
      </a>
      <div className="text-3xs font-inter flex flex-row items-center justify-center self-stretch py-2 pl-0 pr-2 text-center text-gray-200">
        <div className="relative flex-1">
          <span className="text-darkslategray-100">{`By continuing, you agree to the `}</span>
          <span className="text-darkslategray-200 [text-decoration:underline]">
            Terms of use
          </span>
          <span className="text-dimgray">{`  `}</span>
          <span className="font-inter text-darkslategray-100">and</span>
          <span className="text-dimgray">{` `}</span>
          <span className="[text-decoration:underline]">
            <span className="font-inter text-darkslategray-200">
              Privacy Policy.
            </span>
            <span className="text-dimgray">{` `}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Password;
