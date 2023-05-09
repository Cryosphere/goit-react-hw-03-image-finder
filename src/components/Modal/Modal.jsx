import PropTypes from 'prop-types';
import style from './Modal.module.css';

export const Modal = ({ clickImage, handleClose}) => {
    return (
        <div onClick={(e) => handleClose(e)} className={style.Overlay}>
            <div className={style.Modal}>
                <img src={clickImage.largeImageURL} alt={clickImage.tags} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    clickImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
    
    handleClose: PropTypes.func.isRequired,
   
};