import React from 'react';
import resume from './info/resume.jpg';
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  // const [numPages, setNumPages] = useState(1);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div>
      <img src={resume} className="resume" />
      {/* <Document
        className="resume"
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p> */}
    </div>
  );
}

export default Resume


  
 