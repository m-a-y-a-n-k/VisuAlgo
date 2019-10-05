import React from 'react';
import Link from "./Link";

export default class Element extends React.Component{

    render(){
        let elStyles,indexStyles,valStyles,attachLink = null, next = this.props.next;

        switch(this.props.type.toLowerCase()){
            case 'stack':
                if( this.props.data.index === 0){
                    attachLink = 'right';
                    next = 'Top';    
                }
                elStyles = {
                    border: '1px solid white',
                    padding: '2.4%',
                    color: 'white',
                    background: 'rgba(40,40,160,0.8)'
                }
                if(this.props.highlight){
                    elStyles.background = 'rgba(30,150,40,0.8)';
                }
                valStyles = {
                    position: 'relative',
                    margin: 'auto',
                    fontSize: '18px',
                    textAlign: 'center'
                }
                indexStyles = {
                    position: 'relative',
                    top: '16px',
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center'
                }
                break;
            case 'array':
                elStyles = {
                    border: '1px solid white',
                    padding: '2.4%',
                    color: 'white',
                    background: 'rgba(40,40,160,0.8)'
                }
                if(this.props.highlight){
                    elStyles.background = 'rgba(30,150,40,0.8)';
                }
                valStyles = {
                    position: 'relative',
                    margin: 'auto',
                    fontSize: '18px',
                    textAlign: 'center'
                }
                indexStyles = {
                    position: 'relative',
                    top: '16px',
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center'
                }
                break;
            case 'linkedlist':
                    elStyles = {
                        border: '1px solid white',
                        padding: '2.4%',
                        color: 'white',
                        background: 'rgba(40,40,160,0.8)'
                    }
                    if(this.props.highlight){
                        elStyles.background = 'rgba(30,150,40,0.8)';
                    }
                    valStyles = {
                        position: 'relative',
                        margin: 'auto',
                        fontSize: '18px',
                        textAlign: 'center'
                    }
                    attachLink = 'right';
                break;
            default:
        }

        return (
                this.props.data &&
                (
                    <React.Fragment>
                        <span style={elStyles}>
                            <div style={valStyles}>
                                {this.props.data.value}
                            </div>
                            {
                                (
                                    this.props.type.toLowerCase() === 'array' 
                                    ||
                                    this.props.type.toLowerCase() === 'stack'                                 
                                ) 
                                &&
                                <div style={indexStyles}>{this.props.data.index}</div>
                            }
                        </span>
                        {
                            attachLink && next &&
                            <span>
                                <Link direction={attachLink}/>                            
                            </span>
                        }
                        {
                            (this.props.type.toLowerCase() === 'stack' && next)
                            &&
                            <span>Top</span>

                        }
                    </React.Fragment>
                    
                )
            );
    }

}