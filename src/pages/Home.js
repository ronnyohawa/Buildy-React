import React, { useRef, useState } from 'react';
import paidimage from '../images/R6.jpeg';
import logo from '../images/_7c7b83dd-0ccf-4b55-8c81-b01d97a2630e.jpeg'
import myvideo from '../realvideo.mp4';
import locapin from '../icons/location_pin.svg';
import '../css/homepage.css';

const readmorestyles = {
  WebkitLineClamp:2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}
function Readmore() {
  const [collapse, setCollapse] = useState(false)
  return(
    <div className='readmore'>
      <p style={collapse ? null : readmorestyles}>
        Lorem ipsum dolor sit, amet consectetur<br />
        adipisicing elit. Optio maiores quis non,<br />
        suscipit unde officiis ipsa dolore quae nam<br />
        debitis quas, sint quasi culpa et ipsum<br />
        exercitationem pariatur cum reprehenderit.
      </p>
      <button onClick={() => setCollapse(!collapse)}>{collapse ? 'Read less': 'Read more'}</button>
    </div>
  )
}
export class Home1 extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='homecontent'>
          <div className='hometxt'>
            <h2>Your Dream is here</h2>
            <h1>We Make Buildings</h1>
            <Readmore />
          </div>
          <div className='homeimg'>
            <video src={myvideo} controls/>
          </div>
        </div>
        <div className='select'>
          <select>
            <option>Property Type</option>
            <option>Mantionate</option>
            <option>Flat</option>
            <option>Bungalo</option>
          </select>
          <select>
            <option>Select City</option>
            <option>Nairobi</option>
            <option>Nakuru</option>
            <option>Mombasa</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export class Servicelist extends React.Component {
  render() {
    return (
      <div className='specificservice'>
        <img src={this.props.eachdatas.imgs} alt={this.props.eachdatas.title} />
        <h2>{this.props.eachdatas.title}</h2>
        <p>{this.props.eachdatas.text}</p>
        <button>Read more</button>
      </div>
    );
  }
}

export class Services extends React.Component {
  render() {
    const data = [
      {
        imgs: logo,
        title: 'Modern Residence',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imgs: logo,
        title: 'Development Service',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        imgs: logo,
        title: 'Market Analysis',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ];

    return (
      <section className='service'>
        {data.map((eachdata, index) => (
          <Servicelist key={index} eachdatas={eachdata} />
        ))}
      </section>
    );
  }
}
export class PaidList extends React.Component{
  render(){
    return(
          <div className='paidpostcontent'>
          <div className='propretyimg'>
            <img src={this.props.paiddatas.img} alt={this.props.paiddatas.title}/>
          </div>
          <div className='contentright'>
            <div className='title'>
              <h3>{this.props.paiddatas.price}</h3>
              <h3>{this.props.paiddatas.title}</h3>
            </div>
            <div className='location'>
              <img src={this.props.paiddatas.lacimg} alt={this.props.paiddatas.locat} />
              <p>{this.props.paiddatas.locat}</p>
            </div>
            <p className='proptxt'>{this.props.paiddatas.text}</p>
            <div className='agentdetails'>
              <img src={this.props.paiddatas.agentimg} alt={this.props.paiddatas.name} />
              <div className='agentdata'>
                <h2>{this.props.paiddatas.name}</h2>
                <p>{this.props.paiddatas.position}</p>
              </div>
            </div>
            <button className='btncontact'>Contact us</button>
          </div>
        </div>
    )
  }
}
function Paidpost(){
  const [scrollPosition,setScrollPosition]= useState(0);
  const containerRef = useRef();
  const handlescroll=(scrollamount)=>{
    const newscrollposition = scrollPosition + scrollamount;
    setScrollPosition(newscrollposition);

    containerRef.current.scrollTop = newscrollposition;
  }
  const ItemHieght = 540;
  const paiddata =[
    {
      img: paidimage,
      price: 'KSH 14,000,000',
      title: 'Summer Holiday Amazing Home For Family',
      lacimg:locapin,
      locat:'Umoja st,Nakuru,Kenya',
      text:'Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor inciddunt ut labre et dolore magna aliqua',
      agentimg:logo,
      name: 'Ronny Ohawa',
      position: 'Company Agent, CEO & Founder'
    },
    {
      img: paidimage,
      price: 'KSH 10,000,000',
      title: 'Beach Home For Family',
      lacimg:locapin,
      locat:'Diani,Mombasa,Kenya',
      text:'Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor inciddunt ut labre et dolore magna aliqua',
      agentimg:logo,
      name: 'Bradford Muhindi',
      position: 'Company Agent, CEO & Founder'
    },
    {
      img: paidimage,
      price: 'KSH 14,000,000',
      title: 'Summer Holiday Amazing Home For Family',
      lacimg:locapin,
      locat:'Umoja st,Nakuru,Kenya',
      text:'Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor inciddunt ut labre et dolore magna aliqua',
      agentimg:logo,
      name: 'Ronny Ohawa',
      position: 'Company Agent, CEO & Founder'
    },
  ]
  return(
    <section className='paidpost'>
      <div className='paidheader'>
        <h1>Paid Featured Posts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor inciddunt ut labre et dolore magna aliqua</p>
      </div>
      <div ref={containerRef} className='scrolling'>
        {paiddata.map((paiddata, index) => (
          <PaidList key={index} paiddatas={paiddata} />
        ))}
      </div>
      <div className='scrollbtn'>
        <button onClick={()=>{handlescroll(-ItemHieght)}}>Scroll Top</button>
        <button onClick={()=>{handlescroll(ItemHieght)}}>Scroll Down</button>
      </div>
    </section>
  )
}
export class Rewardslist extends React.Component{
  render(){
    return(
        <div className='iconicdata'>
            <img src={this.props.rewarddatas.iconimg} alt={this.props.rewarddatas.title} />
            <div className='iconictxt'>
              <h3>{this.props.rewarddatas.number}</h3>
              <h4>{this.props.rewarddatas.title}</h4>
            </div>
          </div>
    )
  }
}
export class Rewards extends React.Component{
  render(){
    const rewarddata = [
      {
        iconimg:logo,
        number: 4263,
        title: 'Satiseid Client'
      },
      {
        iconimg:logo,
        number: 83,
        title: 'Employes'
      },
      {
        iconimg:logo,
        number: 973,
        title: 'Cups of Coffee'
      },
      {
        iconimg:logo,
        number: 25345,
        title: 'Total Property'
      },
    ]
    return(
      <section className='rewards'>
        <div className='iconic'>
          {rewarddata.map((rewarddata, index)=>(
            <Rewardslist key={index} rewarddatas={rewarddata} />
          ))}
        </div>
      </section>
    )
  }
}
export class Propertylist extends React.Component{
  render(){
    return(
      <div className='propertyimg'>
        <img src={this.props.propertydatas.imges} alt={this.props.propertydatas.title}/>
        <div className='propdata'>
          <h3>{this.props.propertydatas.size}</h3>
          <h2>{this.props.propertydatas.title}</h2>
        </div>
      </div>
    )
  }
}

function Recent(){
  const[scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handlescroll=(scrollamount)=>{
    const newscrollposition = scrollPosition + scrollamount;
    setScrollPosition(newscrollposition);
    containerRef.current.scrollTop = newscrollposition;
  };
  const ItemHieght = 500;
  const PropertyData =[
    {
      imges:paidimage,
      size:'2300 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'4000 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'1000 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'5000 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'7000 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'3500 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'7000 sq ft',
      title: 'Developing a strategy',
    },
    {
      imges:paidimage,
      size:'7000 sq ft',
      title: 'Developing a strategy',
    },
  ]
  return(
    <section className='recent'>
      <div className='recentheader'>
        <h1>Recent Property</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor inciddunt ut labre et dolore magna aliqua</p>
      </div>
      <div ref={containerRef} className='propertys'>
        {PropertyData.map((PropertyData, index)=>(
          <Propertylist key={index} propertydatas={PropertyData} />
        ))}
      </div>
      <div className='scrollbtnrecent'>
        <button onClick={()=>{handlescroll(-ItemHieght)}}>Scroll Up</button>
        <button onClick={()=>{handlescroll(ItemHieght)}}>scroll Down</button>
      </div>
    </section>
  )
}
export class Contactus extends React.Component{
  state ={
    email: "",
  }
  handleOnchange=(e)=>{
    this.setState({email:e.target.value,})
    console.log(this.state)
  }
  handleOnclick=(e)=>{
    return(
      <small>{this.handleOnchange}</small>
    )
  }
  render(){
    return(
      <section className='contacts'>
        <div className='subscribe'>
          <input placeholder='Enter Your Email Address' onChange={this.handleOnchange}/>
          <button onClick={this.handleOnclick}>Subscribe</button>
        </div>
        <div className='aboutmore'>
          <div className='moreinfor'>
            <h1>More Information</h1>
            <h3>Help Center</h3>
            <h3>Terms Of Use</h3>
            <h3>Carrers</h3>
          </div>
          <div className='aboutus'>
            <h1>About</h1>
            <h3>About Buildy</h3>
            <h3>Buildy marketing blog</h3>
          </div>
        </div>
      </section>
    )
  }
}
export class Footer extends React.Component{
  render(){
    return(
      <section className='footer'>
        <img src={locapin} alt='Copyrigt'/>
        <h3>2024 All rights Reserved. Designed Buildy</h3>
      </section>
    )
  }
}
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Home1 />
        <Services />
        <Paidpost />
        <Rewards />
        <Recent />
        <Contactus />
        <Footer />
      </div>
    );
  }
}

export default Home;
