import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateQRcode = () => {
    setQrCode(input);
    setInput("");
  };

  console.log(input);
  console.log(qrCode);

  return (
    <div className="container">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        value={input}
        placeholder="Enter your value here"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQRcode}
      >
        Generate
      </button>
      <div className="qr-container">
        <QRCode id="qr-code-id" value={qrCode} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
