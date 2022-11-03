import ReactDOM from "react-dom";
import './modal.scss'

const OVERLAY_STYLE = {
    position : "fixed",
    top : 0,
    bottom : 0,
    left : 0 ,
    right : 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex : 1000
}

export default function Modal({children,open,onClose,containerStyle}) {

if(!open) return null;


  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_STYLE}> 
    <div id="container" style={containerStyle} >
    {children}
    </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
