import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Please accept the agreement!!!
        </p>
    </Modal>

    return <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec posuere justo. Sed tincidunt libero tincidunt felis facilisis, ac tempus urna mattis. Phasellus volutpat in felis a varius. Mauris at convallis ex. Nunc quam neque, vestibulum quis nisl vitae, fermentum porttitor metus. Integer quis ipsum arcu. Cras vitae sem leo. Phasellus accumsan risus fermentum dolor viverra, in porttitor nulla semper. Vestibulum pharetra interdum metus nec lobortis. Praesent non ipsum ipsum. Suspendisse rhoncus ultricies enim, et aliquet ante faucibus venenatis. Sed dignissim, enim et feugiat vulputate, magna magna consequat libero, eget ultricies augue ligula at sapien.
        </p>
        
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage;