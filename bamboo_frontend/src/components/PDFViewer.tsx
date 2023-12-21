import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ pdfData }) => (
  <div>
    {console.log(pdfData)}
    <a href={pdfData} download="your-pdf-file.pdf">
     
        </a>
  </div>
);

export default PdfViewer;
