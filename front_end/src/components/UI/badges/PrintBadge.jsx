import React from "react";

const PrintBadge = ({ src, alt }) => {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write('<img src="' + src + '" alt="' + alt + '"/>');
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <React.Fragment>
      <button
        onClick={handlePrint}
        className=" text-white bg-green-900 py-1 px-4 h-10 w-32 rounded font-medium"
      >
        Print
      </button>
    </React.Fragment>
  );
};

export default PrintBadge;
