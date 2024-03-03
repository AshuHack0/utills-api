import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Enable PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfToJsonConverter = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const extractPdfText = async (pdfUrl) => {
    try {
      console.log('Loading PDF:', pdfUrl);
      const pdfDoc = await window.pdfjsLib.getDocument(pdfUrl).promise;
      console.log('PDF loaded successfully:', pdfDoc);

      let text = '';
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        console.log('Page:', page); // Log the page object for debugging
        text += await page.getText();
      }

      console.log('PDF text extracted:', text);
      setPdfText(text);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error loading or parsing PDF:', error);
      setPdfText(''); // Clear any previous text
      setError('Error loading or parsing PDF');
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={(e) => extractPdfText(URL.createObjectURL(e.target.files[0]))} />
      {error && <div>Error: {error}</div>}
      {pdfText && (
        <div>
          <h2>PDF Text:</h2>
          <pre>{pdfText}</pre>
        </div>
      )}
      <Document file={pdfText ? null : undefined} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default PdfToJsonConverter;
