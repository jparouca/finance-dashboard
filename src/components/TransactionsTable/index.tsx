import { Container } from "./styles";

export function TransactionsTable() {
  return(

    <Container>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Tag</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          
          <tr>
            <td>DDR4 2660HZ RAM</td>
            <td className="withdraw">-$250</td>
            <td>personal</td>
            <td>02/15/2022</td>
          </tr>

          <tr>
            <td>DDR4 2660HZ RAM</td>
            <td className="deposit">$250</td>
            <td>personal</td>
            <td>02/15/2022</td>
          </tr>

          <tr>
            <td>DDR4 2660HZ RAM</td>
            <td>$250</td>
            <td>personal</td>
            <td>02/15/2022</td>
          </tr>
        </tbody>
      </table>

    </Container>
  );
}