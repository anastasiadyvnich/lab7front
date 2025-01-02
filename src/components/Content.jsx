import React, { Component } from 'react';
import { Image } from './Image';

class Content extends Component {
  render() {
    const { demoClass, toggleClass } = this.props;

    return (
      <>
        <p className="intro">23.04.2005, м. Вінниця</p>
        <p className="intro">
          Турбівська Школа №2<br />
          КПІ ім. Ігоря Сікорського:<br />
        </p>
        <p className="intro">Хобі:</p>
        <ul className="intro">
          <li>Хореографія</li>
          <li>Дизайн</li>
          <li>Музика</li>
        </ul>
        <p className="intro">Улюблені книги чи фільми:</p>
        <ul
			id="demo"
			className={`demo intro ${demoClass}`}
			onClick={() => toggleClass("demo")}
        >
          <li>Гаррі Поттер і Філософський Камінь</li>
          <li>Артист</li>
          <li>Зелена книга</li>
        </ul>

        <p className="next intro">
          Dubai:<br />
          Дубай – це ультрасучасне місто-держава, розташоване на узбережжі Перської
          затоки.<br />
          Відомий своїми розкішними хмарочосами, штучними островами у формі пальм та
          розкішними готелями, Дубай став символом багатства та прогресу.<br />
          Визначні місця: <br />
          Бурдж-Халіфа,<br />
          Пальма Джумейра,<br />
          Дубай Молл<br />
          <a href="https://dubai.ae/">Site City Of Dubai</a>
        </p>

        <Image />
      </>
    );
  }
}

export default Content;
