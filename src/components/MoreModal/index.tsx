import Modal from 'react-modal';
import { Link } from 'react-router-dom';

interface MoreModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function MoreModal({ isOpen, onRequestClose }: MoreModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Link to={`/episode/123`} >
                <button className='active' type='button'>SABER MAIS SOBRE O EPISÓDIO</button>
            </Link>

            <Link to={`/saved`} >
                <button className='active' type='button'>SALVAR EPISÓDIO</button>
            </Link>
        </Modal>
    )
}
