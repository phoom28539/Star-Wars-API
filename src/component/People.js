import React from 'react'
import axios from 'axios'
import './People.css'
import Url from './Url'

class People extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            Info : [],
            index : 3,
            // searchkey=""
        }
    }
        
    
    

    componentDidMount(){ //ทำงานหลังrender กรณีไม่มีการupdate state
        this.getdata();
        console.log(this.state.index);
    }
    
   

    seemore(){ //ปรับ index 
        this.setState ({
            index : this.state.index+3
        })
       
    }

    getdata(){
        let URL="https://swapi.dev/api/people/"
        axios.get(URL).then(res => { 
            console.log(res);
            this.setState({Info:res.data.results});
          });
    }

    

    getepisode(f){
        return f[f.length-2];
    }
    convertToRoman(num) {
        var roman = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1
        };
        var str = '';
      
        for (var i of Object.keys(roman)) {
          var q = Math.floor(num / roman[i]);
          num -= q * roman[i];
          str += i.repeat(q);
        }
      
        return str;
      }


    render(){
        let filterinfo = this.state.Info.filter((detail) => {
            if(this.props.search === '') return this.state.Info
            return detail.name.indexOf(this.props.search) !== -1 ;
        })
        return (
            <div className="people-container">
                <h1 className="p-title">People</h1>
                {filterinfo.slice(0,this.state.index).map((info)=>(
                   
                    <div className="each-container">
                        <span className="p-name">{info.name}</span> 
                        <span className="right-contain">
                            <span className="p-species">{<Url url={info.species} />}</span> 
                            <span className="space">  - </span>
                            {info.films.map((f)=>(
                                <span className="p-epi">{this.convertToRoman(this.getepisode(f))} </span> 
                            ))} 
                        </span>
                        
                    </div>

                ))}
                <div className="link-seemore ">
                    <a  href="#"  onClick ={() => this.seemore()} >see more</a>
                </div>
                

            </div>
        )
    }
}
export default People;