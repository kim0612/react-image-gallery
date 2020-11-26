import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './App.scss';
import asdf from './asdf.jpeg'
import golden from './golden.jpeg'

const images = [
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: golden,
    thumbnail: golden,
  },
];

class App extends Component{
  render() {
    return (
      <div>
        
        <img className="mainimg" src={asdf} alt={"asdf"}/>

        <div className="scription">
          <div className="title">
            "당인리발전소 갤러리"
          </div>
          <div className="author">
            백승관
          </div>
          <div className="subs">
          이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.이곳에 설계개요가 200자 이내로 보여지게 됩니다.
          </div>
          <div className="_table">
            <div className="_line"/>
            <div className="xy">
              <div classname="x">대지면적</div>
              <div className="y">123m²</div>
            </div>
            <hr/>
            {/* <div className="_line"/> */}
            <div className="xy">
              <div classname="x">대지위치</div>
              <div className="y">SEOUL-MAPO</div>
            </div>
            {/* <div className="_line"/> */}
            <hr/>
            <div className="xy">
              <div classname="x">지역지구</div>
              <div className="y">제 2종 근린생활시설</div>
            </div>
            {/* <div className="_line"/> */}
            <hr/>
            <div className="xy">
              <div classname="x">주용도</div>
              <div className="y">상업시설</div>
            </div>
            {/* <div className="_line"/> */}
            <hr/>
            <div className="xy">
              <div classname="x">규모</div>
              <div className="y">13,800m²</div>
            </div>
            <div className="_line"/>
          </div>
        </div>
        
        <div className="imgset">
          <ImageGallery items={images} showPlayButton={false} showBullets={true}/>
        </div>
      
      </div>
    );
  }
}


export default App;
