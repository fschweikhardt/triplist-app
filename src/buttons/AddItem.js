import React from 'react'

export default class AddItem extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleAddItem}>
                    <label htmlFor='newItem'>
                        add place
                        <input
                            type='text'
                            name='newItem'
                            id='newItem'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        GO
                    </button>
                </form>
        )
    }
}