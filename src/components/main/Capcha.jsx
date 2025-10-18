import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Capcha() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const handleVerify = (token) => {
    setToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please complete the captcha first!");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "fit-content",
        margin: "50px auto",
        alignItems: "center",
      }}
    >
      <HCaptcha
        sitekey="YOUR_HCAPTCHA_SITE_KEY"
        onVerify={handleVerify}
        ref={captchaRef}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#3A0CA3",
          color: "white",
          border: "none",
          borderRadius: "25px",
          padding: "12px 28px",
          fontSize: "16px",
          fontWeight: "500",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Submit now →
      </button>
    </form>
  );
}
