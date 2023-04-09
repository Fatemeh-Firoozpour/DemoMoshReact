import React, { Component } from 'react';

class Counter extends Component {
    

    render() { 
        const {onReset,counter, onDelete, onIncrement, onDecrement}=this.props;
        return (
            <div className='row'>
                <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>   
                <div className="col">
                <button
                onClick={()=>onDecrement(counter)}
                className="btn btn-secondary btn-sm"
                disabled = {counter.value===0?"disabled":""}
                >
                    -
               </button>
                <button
                onClick={()=>onIncrement(counter)}
                className="btn btn-secondary btn-sm m-2"
                >
                    +
               </button>
               <button 
               onClick={()=>onDelete(counter.id)} 
               className="btn btn-danger btn-sm">
                    Delete
               </button>
                </div>
                
                
                </div>
                
            
        );
        
    }
    
    
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    
    formatCount() {
        const value = this.props.counter.value;
        return value===0? 'zero': value;
    }
    
     
};

export default Counter;