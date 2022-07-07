import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";
export function Summary () {
  return (

    <Container>
      
      <div>
        <header>
          <p>Income</p> 
          <img src={incomeImg}/>
        </header>

        <strong>$1000.00</strong>
      </div>
      
      <div>
        <header>
          <p>Outcome</p> 
          <img src={outcomeImg}/>
        </header>

        <strong>$350.00</strong>
      </div>

      <div className='highlight'>
        <header>
          <p>Total</p> 
          <img src={totalImg}/>
        </header>

        <strong>$650.00</strong>
      </div>

    </Container>

  )
}