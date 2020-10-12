import React, {Component} from "react"

class Time extends Component{
    constructor(props){
        super(props)
        this.state = {
            time:100,
            date: new Date(),
            showTime: true,   
        }
        
    }

    componentDidMount(){
        if (this.props.start !== undefined){
          this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        this.waktuID = setInterval(
            () => this.detik(),
            1000
          );
      }

    componenWillHide(){
       this.setState({showTime: false}); 
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    componentDidUpdate() {
        if (this.state.time === 0 && this.state.showTime) {
            this.componenWillHide()
        }
    }
    
    tick() {
        this.setState({
          time: this.state.time - 1 
        });
      }
    
    detik() {
        this.setState({
          date: new Date()
        });
    }

    render(){
        return(
            <>
            {
                this.state.showTime && (
                    <h1 style={{textAlign: "center"}}>
                        Sekarang Jam {this.state.date.toLocaleTimeString()} &emsp;
                        Hitung mundur {this.state.time}
                        <br/>
                    </h1>
                )
            }
            {/* <button onClick={()=> this.setState({showTime: false})}>Hide Time</button> */}
            </>
        )
    }
}


export default Time