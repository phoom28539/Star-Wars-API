import React from 'react'
import axios from 'axios'

class Url extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Data : []
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata(){
        let URL=this.props.url;
        axios.get(URL).then(res => { 
            console.log(res);
            this.setState({Data:res.data});
          });
    }

    render(){
        return(
            <span>
                {this.state.Data.name}
            </span>
        )
}
}
export default Url;