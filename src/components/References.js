import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBlock } from 'reactstrap';


export default class References extends React.Component {
  render(){
    const img = {
      height:'180px',
    }

    return(
      <div className="container">
        <CardGroup>
         <Card style={{margin:'2px'}}>
           <CardImg top width="100%" src="https://usatgolfweek.files.wordpress.com/2017/07/usatsi_10173374-1-e1500850333764.jpg?w=1000&h=600&crop=1" alt="Card image cap" style={img}/>
           <CardBlock>
             <CardTitle style={{textAlign:'center'}}>Jordan Spieth</CardTitle>
             <CardSubtitle style={{textAlign:'center'}}>Phone: 317-101-2938</CardSubtitle>
             <CardText style={{fontStyle:'italic', textAlign:'center'}}>"He is a great competitor and a tremendous golfer. I recommend him."</CardText>

           </CardBlock>
         </Card>
         <Card style={{margin:'2px'}}>
           <CardImg top width="100%" src="https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/8299f92848bc96ee92a8f03057f64cc554a2208f_254x191.jpg?" alt="Card image cap" style={img}/>
           <CardBlock>
             <CardTitle style={{textAlign:'center'}}>Elon Musk</CardTitle>
             <CardSubtitle style={{textAlign:'center'}}>Phone: 317-293-8746</CardSubtitle>
             <CardText style={{fontStyle:'italic', textAlign:'center'}}>"He is one of the most brilliant minds of our generation. In everything I do, I stop to think if it is good enough to beat him."</CardText>

           </CardBlock>
         </Card>
         <Card style={{margin:'2px'}}>
           <CardImg top width="100%" src="http://www.miami.com/wp-content/uploads/sites/2/2017/06/110909-phil_collins_Neale-Haynes.jpg" alt="Card image cap" style={img}/>
           <CardBlock>
             <CardTitle style={{textAlign:'center'}}>Phil Collins</CardTitle>
             <CardSubtitle style={{textAlign:'center'}}>Phone: 317-982-2837</CardSubtitle>
             <CardText style={{fontStyle:'italic', textAlign:'center'}}>"Sussudio."</CardText>

           </CardBlock>
         </Card>
        </CardGroup>
      </div>
    )
  }
}
