import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import { useEpisode } from '../../hook/useEpisode';

import { toast } from 'react-toastify'

interface MoreModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    id: string;
    title: string;
    cover: string;
    duration: string;
    mp3: string;
    showButtonDeleteEpisodeSaved: boolean;
}

export default function MoreModal({ isOpen, onRequestClose, id, title, cover, duration, mp3, showButtonDeleteEpisodeSaved }: MoreModalProps) {

    const { saved, setSaved } = useEpisode()

    let navigate = useNavigate()

    async function handleSaveEpisode(id: string) {

        try {

            const episodeAlreadyExists = saved.find(episode => episode.id === id)

            if (episodeAlreadyExists) {

                toast.error("Esse episódio já está salvo")

            } else {

                const data = {
                    id,
                    title,
                    cover,
                    duration,
                    mp3
                }

                await setSaved([...saved, data])

                localStorage.setItem("saveds", JSON.stringify(saved))

                navigate('/saved')

                toast.success("Episódio salvo")


            }

        } catch (err) {
            console.log(err)
        }

    }

    function handleDeleteEpisodeSaved(id: string) {

        try {

            const updatedSaved = [...saved]

            const savedExists = updatedSaved.findIndex(product => product.id === id)

            console.log(savedExists)

            if (savedExists >= 0) {
                
                updatedSaved.splice(savedExists, 1)
                setSaved(updatedSaved)
                localStorage.setItem('saveds', JSON.stringify(updatedSaved))

                toast.success('Episódio deletado')
            } else {
                throw Error()
            }

        } catch {
            toast.error("Erro interno")
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


            {showButtonDeleteEpisodeSaved &&
                <button
                    className='active'
                    type='button'
                    onClick={() => handleDeleteEpisodeSaved(id)}
                >
                    EXCLUIR DA LISTA DE SALVOS
                </button>
            }

            {!showButtonDeleteEpisodeSaved &&

                <button
                    className='active'
                    type='button'
                    onClick={() => handleSaveEpisode(id)}
                >
                    SALVAR EPISÓDIO
                </button>
            }


        </Modal >
    )
}
