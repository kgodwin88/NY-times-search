import React, { Component } from "react";
import Input from "../Form";
import FormBtn from "../FormBtn";
import SaveBtn from "../SaveBtn";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Card, CardBody } from "../Card";
import { List, ListItem } from "../List";
import API from "../../utils/API";
import Saved from "../Saved";
class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = data => {
    API.saveArticle({
      title: data.title,
      url: data.url,
      date: data.date,
      author: data.author
    }).then(res => this.refs.child.loadArticles());
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("help");
    this.setState({ articles: [] });
    if (!this.state.topic || !this.state.startYear || !this.state.endYear) {
      alert("Please Fill in all input fields")
    }else if(!(this.state.startYear.length === 4) || !(this.state.endYear.length === 4)){
      alert('The Year field needs to contain 4 characters')
    }else{

      API.getArticles({
        q: this.state.topic,
        begin_date: Number(this.state.startYear) + "0101",
        end_date: Number(this.state.endYear) + "1231"
      })
        .then(res => {
          for (let i = 0; i < 5; i++) {
            let title = res.data[i].headline.main;
            let author = res.data[i].byline.original;
            let url = res.data[i].web_url;
            let date = res.data[i].pub_date;
            console.log(date);
            let article = {
              title: title,
              author: author,
              url: url,
              date: date
            };
            this.state.articles.push(article);
          }
          this.setState({ topic: "" });
          this.setState({ startYear: "" });
          this.setState({ endYear: "" });
          this.setState({ articles: this.state.articles });
        })

        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="SEARCH">
              <CardBody>
                <form ref="form">
                  <Input
                    type="text"
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                    placeholder="Topic (required)"
                    ref="topic"
                  />
                  <Input
                    type="number"
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start Year (required)"
                    ref="startYear"
                  />
                  <Input
                    type="number"
                    className="form-control"
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year (required)"
                    ref="endYear"
                  />
                  <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              <CardBody>
                {!this.state.articles.length ? (
                  <h5>No Articles to Display</h5>
                ) : (
                  <List>
                    {this.state.articles.map(article => (
                      <ListItem
                        key={article.title}
                        title={article.title}
                        author={article.author}
                        url={article.url}
                        date={article.date}
                      >
                        <SaveBtn onClick={() => this.saveArticle(article)} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Saved ref="child" />
      </Container>
    );
  }
}

export default Home;
