import React, { Component} from 'react';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';

class SkillsTable extends Component {
  constructor(){
    super();
    this.state = {
      people : [{id:1,TrainerName:"Joe Bloggs",skills:"Java EE Scala"},
                {id:2,TrainerName:"Bob",skills:"Java"}]
    }

    this.updateSkills = () => this.setState({
      skills :
        this.state.person.skills.concat([this.newSkillInput])
    });
  }

  render() {
    return(
      <div>
          <table class="App">
            <TableHeader />
            <TableRow data={ this.state.people }/>
          </table>
          <input id={this.newSkillInput} type="text" placeholder="New Skill"/>
          <button onClick={this.updateSkills}>Update Skills</button>


      </div>
    );
  }
}

export default SkillsTable;
