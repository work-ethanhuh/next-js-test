import React from 'react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div style={{backgroundColor:'red'}}>
                <h2>{title}</h2>
                {children}
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Dialog;