import ReactDOM from 'react-dom';
import './Model.css';
const Model=({children, onClose})=>{
    return ReactDOM.createPortal(
        <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
    );
};
export default Model;