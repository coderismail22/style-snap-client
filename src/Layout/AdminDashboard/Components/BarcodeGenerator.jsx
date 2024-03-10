import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeGenerator = ({ skuList }) => {
  const barcodeContainerRef = useRef(null);

  useEffect(() => {
    console.log("🚀 ~ useEffect data skuList~ :", skuList);

    // Clear existing barcodes
    barcodeContainerRef.current.innerHTML = "";

    if (skuList && skuList.length > 0) {
      skuList.map((sku) => {
        // Create a new element for each barcode
        const barcodeElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        barcodeContainerRef.current.appendChild(barcodeElement);

        // Use JSBarcode to generate Code 128 barcode for the current SKU
        JsBarcode(barcodeElement, sku, {
          format: "CODE128",
          displayValue: true, // Whether to display the human-readable value below the barcode
        });
      });
    }
  }, []);

  return <div ref={barcodeContainerRef}></div>;
};

export default BarcodeGenerator;
