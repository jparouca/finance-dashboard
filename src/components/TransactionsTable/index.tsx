import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("http://localhost:3000/api/transactions")
    .then(response => console.log(response.data))
  }, []);
  
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