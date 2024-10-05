import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
        <div>
            <div>
                <h2>확인</h2>
                <p>이 작업을 진행하시겠습니까?</p>
                <button onClick={onClose}>확인</button>
                <button onClick={onClose}>취소</button>
            </div>
        </div>
        </>
    );
};

export default Modal;