import React from "react";
import '../css/service.css';
import house from '../icons/house.svg'
class Servlist extends React.Component{
    render(){
        return(
            <div className="servicecontainer">
                <img src={this.props.serviceslist.img} alt={this.props.serviceslist.title}/>
                <div className="servicetxt">
                    <h1>{this.props.serviceslist.title}</h1>
                    <p>{this.props.serviceslist.content}</p>
                    <button>Request Service</button>
                </div>
            </div>
        )
    }
}
export class Service extends React.Component{
    render(){
        const servicelist =[
            {
                img:house,
                title:"Building and Construction",
                content:"We offer Building and construction services all round the country",
            },
            {
                img:house,
                title:"Interior Design",
                content:"We offer Building and construction services all round the country",
            },
            {
                img:house,
                title:"Land Servey",
                content:"We offer Building and construction services all round the country",
            },
            {
                img:house,
                title:"Architecture",
                content:"We offer Building and construction services all round the country",
            },
        ]
        return(
            
            <div className="services">
                {servicelist.map((servicelist,index)=>(
                    <Servlist key={index} serviceslist={servicelist} />
                ))}
            </div>
        )
    }
}