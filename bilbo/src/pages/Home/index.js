import { Link } from 'react-router-dom';
import gandalf from '../../assets/images/gandalf.png';

export default function Home()
{
  return(
    <div>
      <h1>hello</h1>
      <Link to='/bag'>mochila</Link>
      <img src={ gandalf } />
    </div>
  );
}