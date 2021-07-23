import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     /*
    //     자바스크립트에서 제약사항으로 생성자에서 super 호출 전에는 this를 사용할 수 없음
    //     https://min9nim.github.io/2018/12/super-props/
    //     */
    //     super(props); 
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0,
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;