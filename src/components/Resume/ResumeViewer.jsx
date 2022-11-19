import React from 'react'
import { Worker , Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const ResumeViewer = ({ resume }) => {
    return (
        <Worker style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '100px',
        }} workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
            <div>
                <Viewer fileUrl={resume} />
            </div>
        </Worker>
    )
}

export default ResumeViewer