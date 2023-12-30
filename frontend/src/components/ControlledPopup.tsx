import {FC, ReactNode, useState} from "react";
import {Modal} from "react-bootstrap";

interface ControlledPopupProps {
    externalOpen?: boolean;
    onExternalToggle?: (isOpen: boolean) => void;
    popupButtons?: Array<ReactNode>;
    content?: ReactNode;
    title?: string;
}

function ControlledPopup({externalOpen, onExternalToggle, popupButtons, content, title}: ControlledPopupProps) {

    return (
        <>
            <Modal
                show={externalOpen}
                onHide={onExternalToggle && (() => onExternalToggle(false))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        content
                    }
                </Modal.Body>
                <Modal.Footer>
                    {
                        popupButtons
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ControlledPopup;