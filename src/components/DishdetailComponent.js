import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDishDetail: this.props.dsdetail
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <div className='col-12 col-md-5 m-1'>
          <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name}/>
              <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if (comments != null) {
    const cmnts = comments.map(comment => {
      return (
        <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {" "} {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format(new Date(comment.date))}
            </p>
        </li>
      );
    });
    return(
      <div className='col-12 col-md-5 m-1'>
          <h4> Comments </h4>
          <ul className='list-unstyled'>
              {cmnts}
          </ul>
      </div>
    );
    }
    else {
      return (<div></div>)
    }
};

render(){
  if(this.props.dish != null){
    return(
      <div class="container">
      <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
      </div>
      </div>
    );
  }
  else {
    return (<div></div>);
  }

 }
}

export default DishDetail
