import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../store/actions/questions'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }
    handleOptionOneChange = (e) => {
        const text = e.target.value

        this.setState({
            optionOneText: text,
        })
    }
    handleOptionTwoChange = (e) => {
        const text = e.target.value

        this.setState({
            optionTwoText: text,
        })
    }
    handleSubmit = (e) => {
        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
        }))
    }
    render() {
        const { optionOneText, optionTwoText } = this.state
        return (
            <div>
                <h3>New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder=''
                        value={optionOneText}
                        onChange={this.handleOptionOneChange}
                    />
                    <textarea
                        placeholder=''
                        value={optionTwoText}
                        onChange={this.handleOptionTwoChange}
                    /> 
                    <button
                        type='submit'
                        disabled={optionOneText === '' || optionTwoText === ''}
                    >
                        Submit
                    </button>                   
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion);