import { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { knapsack } from '../../utils/knapsack';

export default function Bag()
{
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

  return(
    <div>
      <h1>Mochila do Bilbo</h1>
      <p>Adicione a quantidade máxima de itens que cabem na mochila e em seguida a lista de itens com seus respectivos nomes, quantidades disponíveis e calorias. 
        Após o fim da listagem, clique em calcular para ver a mochila ideal com o maior número de calorias.</p>
      <Input type='number' label='Limite de itens da mochila' input={ limit } placeholder='Limite de itens' onChange={ (value) => setLimit(value) } />
      <Form onSubmit={ (item) => setItens([...itens, item]) } />
      <button onClick={() => handleSubmit() } >Ver mochila</button>
      { itens.map( (item) => {
        return(
          <div>
            <p>{ item.name }</p>
            <p>{ item.amount }</p>
            <p>{ item.calories }</p>
          </div>
        );
      } ) }
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
      >
        <p>{ calories }</p>
        { bag.map( (item) => {
        return(
          <div>
            <p>{ item.name }</p>
            <p>{ item.amount }</p>
          </div>
        );
      } ) }
      </Modal>
    </div>
  );
}