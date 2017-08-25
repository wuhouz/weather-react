/**
 * Created by wuhou on 2017/8/25.
 */
import React, {Component} from 'react';
import cityCode from './config';
export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: null
        }
    }
    componentDidMount(){
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        fetch(apiUrl).then((response) => {
            if( response.status !== 200 ){
                throw new Error( `Fail to get response with status ${response.status}` );
            }
            response.json().then( (responseJson) => {
                this.setState({
                    weather: responseJson.weatherinfo
            });
            }).catch( (error) => {
                this.setState({
                    weather: null
                });
            });
        }).catch( (error) => {
            this.setState({
                weather: null
            })
        });
    }
    render(){
        if( !this.state.weather ){
            return <div>暂无数据</div>
        }

        const { city, weather, temp1, temp2 } = this.state.weather;
        const style = {padding: '50px'};
        return (
            <div style={style}>
                <h1>{city}</h1>
                <p>{weather}</p>
                <p>最低气温 {temp1}</p>
                <p>最高气温 {temp2}</p>
            </div>
        );
    }
}