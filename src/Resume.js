import React  from 'react';
import resume from './info/resume.pdf';
import SinglePagePDFViewer from "./Single.js";

function Resume() {
 
 
    return(
    <div>
      <SinglePagePDFViewer pdf={resume} />
    </div>
    )
}

export default Resume


  
 