import React, { useEffect, useState } from "react";
import pdfjs from "pdfjs-dist"; // Import pdfjs-dist with webpack
import "pdfjs-dist/web/pdf_viewer.css"; // Import the viewer stylesheet

const FlippingBook = ({ pdfFile }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js"; // Make sure to have pdf.worker.js in the public directory

    pdfjs.getDocument(pdfFile).promise.then((pdfDoc) => {
      setTotalPages(pdfDoc.numPages);
      renderPage(currentPage);
    });
  }, [pdfFile]);

  const renderPage = async (pageNum) => {
    const pdfDoc = await pdfjs.getDocument(pdfFile).promise;
    const page = await pdfDoc.getPage(pageNum);

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    page.render(renderContext);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      renderPage(currentPage + 1);
    }
  };

  return (
    <div>
      <canvas id="canvas"></canvas>
      <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default FlippingBook;
