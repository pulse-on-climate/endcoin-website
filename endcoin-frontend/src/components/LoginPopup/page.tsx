'use client';
import { CloseIcon } from '../../icons/closeIcon';
import { useEffect, useState } from 'react';

interface PopupProps {
  onClose: () => void;
  acceptFunction?: () => void;
  acceptText?: string;
  rejectText?: string;
  title?: string;
  subTitle?: string;
  transaction?: boolean;
  explorerLink?: string;
}

const Popup: React.FC<PopupProps> = ({
  onClose,
  acceptFunction,
  explorerLink,
  transaction,
  title,
  subTitle,
  acceptText,
  rejectText,
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger the opening animation after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Small delay to apply the opening animation

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 500); // Duration of the closing animation
  };

  return (
    <>
      {isAnimating && (
        <div
          className={`!z-50 fixed inset-0 flex items-center justify-center bg-cryptoTask-popup-bg bg-opacity-65 transition-opacity duration-500 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`flex flex-col bg-black shadow-lg w-full max-w-sm mx-4 sm:mx-auto transform transition-transform duration-500 ease-in-out pb-10 ${
              isVisible ? 'scale-100' : 'scale-50'
            }`}
          >
            <button onClick={handleClose} className="self-end">
              <CloseIcon color="#7BC6E3" />
            </button>
            <div className="text-gray-300  mx-4">
              <h2 className="text-lg font-endcoin-bold text-white">
                {title ? title : ''}
              </h2>
              <p className="text-cryptoTask-subtitle-mobile font-cryptoTask-regular ct-md:text-cryptoTask-subtitle">
                {subTitle ? subTitle : ``}
              </p>
              {explorerLink && transaction && (
                <p
                  onClick={() =>
                    window.open(
                      `https://explorer.solana.com/tx/${explorerLink}?cluster=devnet`,
                      '_blank',
                    )
                  }
                  className="hover:text-end-button-hover-blue mt-2 cursor-pointer hover:underline"
                >
                  View Transaction
                </p>
              )}
              <div className="flex flex-col ct-md:flex-row ct-md:justify-center items-center mt-10 ct-md:gap-x-4 gap-y-4 font-cryptoTask-regular text-sm">
                {acceptFunction && (
                  <button
                    className="hover:text-cryptoTask-orange"
                    onClick={() => acceptFunction()}
                  >
                    {acceptText ? acceptText : 'You have my trust'}
                  </button>
                )}
                <button
                  className="hover:text-end-button-hover-blue"
                  onClick={() => handleClose()}
                >
                  {rejectText ? rejectText : 'Too soon'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
