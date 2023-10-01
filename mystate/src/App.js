import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      person: {
        fullName: 'hy, my name is micheal',
        bio: 'A ReactJS Developer',
        imgSrc: 'https://example.com/profile.jpg',
        profession: 'front-end developer',
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
   
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 10); // Update every 1 second
  }

  componentWillUnmount() {
    
    clearInterval(this.interval);
  }

  toggleShow = () => {
   
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Welcome to My React App</h1>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}

        <p>Time Interval Since Mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
