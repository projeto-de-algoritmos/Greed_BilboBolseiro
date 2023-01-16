import { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { knapsack } from '../../utils/knapsack';
import bilbo from '../../assets/images/bilbobag.png';

export default function Bag() {
  const [modalOpen, setModalOpen] = useState(false);
  const [itens, setItens] = useState([]);
  const [limit, setLimit] = useState(0);
  const [bag, setBag] = useState([]);
  const [calories, setCalories] = useState(0);

  function handleSubmit() {
    const { orderedItensList, totalCalories } = knapsack(itens, limit);
    setBag(orderedItensList);
    setCalories(totalCalories);
    setModalOpen(true);
  };

  return (
    <div className='page bag'>
      <div className='description'>
        <h1>Mochila do Bilbo</h1>
        <p>Adicione a quantidade máxima de itens que cabem na mochila e em seguida a lista de itens com seus respectivos nomes, quantidades disponíveis e calorias.
          Após o fim da listagem, clique em calcular para ver a mochila ideal com o maior número de calorias.</p>
      </div>
      <div className='content-container'>
        <div className='form-container'>
          <Input type='number' label='Limite de itens da mochila' input={limit} placeholder='Limite de itens' onChange={(value) => setLimit(value)} />
          <Form onSubmit={(item) => setItens([...itens, item])} />
        </div>
        <div className='itens-list'>
          <h3>Lista de itens:</h3>
          {itens.map((item) => {
            return (
              <div className='item-container'>
                <p>Nome do item: {item.name}</p>
                <p>Quantidade disponível: {item.amount}</p>
                <p>Calorias por item: {item.calories}</p>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <button onClick={() => handleSubmit()} >Ver mochila</button>
      </footer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
      >
        <div className='bag-modal-content'>
          <div>
            <p>Sua mochila alcançou um total de {calories} calorias. Foram adicionados:</p>
            <div className='itens-list'>
              {bag.map((item) => {
                return (
                  <div>
                    <p>Nome do item: {item.name}</p>
                    <p>Quantidade adicionada: {item.amount}</p>
                  </div>
                );
              })}
            </div>
            <button onClick={() => window.location.reload()}>Reorganizar mochila</button>
          </div>
          <img src={bilbo} />
        </div>
      </Modal>
    </div>
  );
}