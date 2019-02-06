import React, {Component} from 'react';

class TableHeader extends Component {

  render(){
    return(
      <tr>
        <th>ID</th>
        <th>TrainerName</th>
        <th>Skills</th>
      </tr>
    );
  }
}
export default TableHeader;
