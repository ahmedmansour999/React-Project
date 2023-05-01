import React, { Component } from 'react';
import { Span, WorkTiltle  ,WorkSection, PartTiltle, Line, PartDesc, Part, Icon} from './styled';
import axios from 'axios';

class Work extends Component {
  
  state={
    works : []
  };


  
  componentDidMount () {
    axios.get('js/data.json').then(res => {this.setState ({ works : res.data.work}) })
  }


  render(){

    const {works} = this.state ;
    const WorkList =  works.map((workItems)=>{
      return(
        <Part first={workItems.id} key={workItems.id}>
        <Icon className={workItems.icon_name}></Icon>
        <PartTiltle >{workItems.tiltle}</PartTiltle>
        <Line />
        <PartDesc >
            {workItems.body}
        </PartDesc>
    </Part>
      )
    })
    return (
      <WorkSection>
      <div className="container">
          <WorkTiltle><Span>My</Span> Work</WorkTiltle>
  
          {WorkList}
            
          
      </div>
    </WorkSection>
    );
  }
}
export default Work;
