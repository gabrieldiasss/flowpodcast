import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

interface MoreModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    id: string;
    title: string;
    cover: string;
    duration: string;
}

export default function MoreModal({ isOpen, onRequestClose, id, title, cover, duration }: MoreModalProps) {

    let navigate = useNavigate()

    async function handleSaveEpisode() {

        try {
            const data = {
                id,
                title,
                cover,
                duration
            }
    
            await axios.post("http://localhost:5000/saved", data)

            navigate('/saved')

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >

            <Link to={`/episode/${id}`} >
                <button className='active' type='button'>SABER MAIS SOBRE O EPISÓDIO</button>
            </Link>

            <button className='active' type='button' onClick={handleSaveEpisode} >SALVAR EPISÓDIO</button>
            
        </Modal>
    )
}
