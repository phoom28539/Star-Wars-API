import React from 'react'
import axios from 'axios'
import './Starship.css'

class Starship extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Info : [],
            index : 3,
            
            
        }
    }
    
    componentDidMount(){ //ทำงานหลังrender กรณีไม่มีการupdate state
        this.getdata();
        // this.seemore();
        // console.log(this.state.index);
    }
    
    seemore(){ //ปรับ index 
        this.setState ({
            index : this.state.index+3
        })
    }

    getdata(){
        let URL="https://swapi.dev/api/starships/"
        axios.get(URL).then(res => { 
            console.log(res);
            this.setState({Info:res.data.results});
          });
    }

    printcost(x){
        x/=1000000;
        if(x>=1){
            return "$"+x+"M"
        }else{
            x *=1000;
            return "$"+x+"K"
        }
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
            <div className="Starship-container">
                
                <h1 className="s-title">Starship</h1>
                {filterinfo.slice(0,this.state.index).map((info)=>(
                   
                    <div className="each-row" >
                        <span className="s-name">{info.name}</span> 
                        <span className="right-container">
                        <span className="s-cost">{this.printcost(info.cost_in_credits)}</span>
                        <span className="space"> -</span>
                        {info.films.map((f)=>(
                            <span className="s-epi">{this.convertToRoman(this.getepisode(f))} </span> 
                        ))} 
                        </span>
                    </div>

                ))}
                <div className="link-seemore">
                    <a href="#"  onClick ={() => this.seemore()} >see more</a>
                </div>
               

            </div>
        )
    }
}
export default Starship;