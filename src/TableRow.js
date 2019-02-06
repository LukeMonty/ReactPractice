import React, {Component} from 'react';

class TableRow extends Component {

  render(){

      var output = this.props.data.map((person) => {
        return (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.TrainerName}</td>
            <td>{person.skills}</td>
          </tr>
        );
      });


    return(
      <tbody>
          {output}
      </tbody>

    );
  }
}

export default TableRow;
