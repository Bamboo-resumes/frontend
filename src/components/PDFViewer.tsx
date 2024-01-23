import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
interface PdfViewerProps {
  pdfData: string;
}
const PdfViewer = ( props: PdfViewerProps ) => (
  <div>
    <a href={props.pdfData} download="your-pdf-file.pdf">  
        </a>
  </div>
);

export default PdfViewer;
