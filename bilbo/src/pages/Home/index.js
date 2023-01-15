import { Link } from 'react-router-dom';
import { useState } from 'react';
import gandalf from '../../assets/images/gandalf.png';
import bilbo from '../../assets/images/bilbocarta.png';
import './styles.css';
import Modal from 'react-modal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='page home'>
      <div>
        <h1>Bilbo Bolseiro</h1>
        <p>Meu querido companheiro, prepare sua mochila para sua jornada! Restam-lhe apenas dez minutos!
          Thorin e Companhia lhe deixaram uma carta porque não puderam esperar.
        </p>
        <button onClick={() => setModalOpen(true)} >Abrir carta</button>
      </div>
      <img src={gandalf} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
      >
        <div>
          <p>Thorin e Companhia para o Ladrão Bilbo, saudações!
            Pela sua hospitalidade, nossos mais sinceros agradecimentos,
            e pela sua oferta de ajuda profissional, nossa agradecida aceitação.
            Julgando desnecessário perturbar seu precioso repouso,
            partimos na frente para fazer os preparativos necessários,
            e estaremos no aguardo de sua respeitável pessoa na Estalagem Dragão Verde,
            em Beirágua, às onze horas da manhã em ponto. Contamos com sua pontualidade.
            Respeitosamente, Thorin & Cia </p>
          <Link to='/bag'>Preparar mochila</Link>
        </div>
        <img src={bilbo} />
      </Modal>
    </div>
  );
}