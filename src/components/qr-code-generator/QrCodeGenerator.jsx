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

  return (
    <div className="container">
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerateQRcode()}
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
      </div>
      <div className="qr-container">
        {qrCode && <QRCode id="qr-code-id" value={qrCode} />}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
