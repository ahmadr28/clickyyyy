import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Images from "./components/Images";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    feedback: "",
    score: "0",
    topScore: "0",
    images: [
      { id: "0", img: "./imgs/j1.jpg", isClicked: false },
      { id: "1", img: "./imgs/j2.jpg", isClicked: false },
      { id: "2", img: "./imgs/j3.jpg", isClicked: false },
      { id: "3", img: "./imgs/j4.jpg", isClicked: false },
      { id: "4", img: "./imgs/j5.jpg", isClicked: false },
      { id: "5", img: "./imgs/j6.jpg", isClicked: false },
      { id: "6", img: "./imgs/j7.jpg", isClicked: false },
      { id: "7", img: "./imgs/j8.jpg", isClicked: false },
      { id: "8", img: "./imgs/j9.jpg", isClicked: false },
      { id: "9", img: "./imgs/j10.jpg", isClicked: false },
      { id: "10", img: "./imgs/j11.jpg", isClicked: false },
      { id: "11", img: "./imgs/j12.jpg", isClicked: false }
    ]
  };

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    let arry = this.state.images;
    for (var i = arry.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = {
        id: arry[i].id,
        img: arry[i].img,
        isClicked: arry[i].isClicked
      };
      arry[i] = {
        id: arry[j].id,
        img: arry[j].img,
        isClicked: arry[j].isClicked
      };
      arry[j] = temp;
    }
    this.setState({ images: arry });
  };
  handleClick = idx => {
    console.log(idx);
    this.state.images.forEach(image => {
      if (image.id === idx) {
        if (image.isClicked) {
          this.setState({ score: "0" });
          this.setState({ feedback: "You gotta do better than that!" });
          this.setState(prevState => {
            return {
              images: prevState.images.map(image => {
                image.isClicked = false;
                return image;
              })
            };
          });
          this.randomize();
        } else {
          this.setState({ score: parseInt(this.state.score) + 1 });
          if (this.state.score === this.state.topScore) {
            this.setState({ topScore: parseInt(this.state.topScore) + 1 });
          }
          this.setState({ feedback: "Keep going!" });
          this.setState(prevState => {
            return {
              images: prevState.images.map(image => {
                if (image.id === idx) {
                  image.isClicked = true;
                }
                return image;
              })
            };
          });

          console.log("update state");
          this.randomize();
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          feedback={this.state.feedback}
        />
        <Banner />
        <Images images={this.state.images} handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
