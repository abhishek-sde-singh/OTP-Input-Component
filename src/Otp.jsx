import { useEffect, useRef, useState } from "react";

const OTP = ({ length = 4 }) => {
  const [otpFields, setOtpFields] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    const copyOtpFields = [...otpFields];

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) inputRef.current[index - 1].focus();
    }

    if (isNaN(key)) {
      return;
    }
    copyOtpFields[index] = key;
    setOtpFields(copyOtpFields);
    if (key && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].focus();
    }
  }, []);

  return (
    <div className="flex">
      {otpFields.map((item, index) => {
        return (
          <input
            key={index}
            ref={(el) => (inputRef.current[index] = el)}
            type="text"
            value={item}
            className="border-2 w-10 h-10 ml-4 text-center"
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTP;
