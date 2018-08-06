import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import { Col, Row } from "../Grid";
import { Card, CardBody } from "../Card";
import { List, ListItem } from "../List";
import API from "../../utils/API";
class Saved extends Component {
    state = {
        savedArticles: []
    }

componentDidMount(){
    this.loadArticles()
}
loadArticles = () => {
    API.getSavedArticles()
        .then(res =>
        this.setState({ savedArticles: res.data,})
    )
    .catch(err => console.log(err));
}
deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles">
              <CardBody>
                {!this.state.savedArticles.length ? (
                  <h5>No Articles Have Been Saved</h5>
                ) : (
                  <List>
                    {this.state.savedArticles.map(article => (
                      <ListItem
                        key = {article._id}
                        title={article.title}
                        author={article.author}
                        url={article.url}
                        date={article.date}
                      >
                        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
    );
  }
}

export default Saved;
