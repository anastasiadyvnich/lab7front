import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import GoodsGallery from './components/GoodsGallery';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			demoClass: "",
		};
	}

	toggleClass = (type) => {
		if (type === "demo") {
		  this.setState((prevState) => {
			if (!prevState.demoClass) {

			  return { demoClass: "active" };
			} else if (prevState.demoClass === "active") {

			  return { demoClass: "inactive" };
			} else {

			  return { demoClass: "active" };
			}
		  });
		}
	};


  componentDidMount() {
    document.title = 'Дивнич А.Я. ІМ-23';

    const existingDescriptions = document.querySelectorAll('meta[name="description"]');
    existingDescriptions.forEach((el) => el.remove());

    const existingKeywords = document.querySelectorAll('meta[name="keywords"]');
    existingKeywords.forEach((el) => el.remove());

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Сьома лабораторна робота з основ фронт-енд технологій';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = "Ім'я, Ініціали, Прізвище, Місто, Освіта, Посилання";
    document.head.appendChild(metaKeywords);
  }

  toggleColor = (type) => {
    if (type === 'demo') {
      this.setState((prevState) => ({
        isDemoColored: !prevState.isDemoColored,
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Завдання 1.</h2>
        <Header 
			title="Дивнич Анастасія Ярославівна"
		/>
        <Content
          demoClass={this.state.demoClass}
          toggleClass={this.toggleClass}
        />
        <section className="goods">
          <h2>Завдання 2.</h2>
          <GoodsGallery />
        </section>
      </div>
    );
  }
}

export default App;
