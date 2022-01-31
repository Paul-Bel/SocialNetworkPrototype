import React from "react";


type ProfilePropsType = {
    value: string
}

export class ProfileStatus extends React.Component<ProfilePropsType> {
    state = {
        editMode: false
    }

    changeEditModeOn() {
        this.setState({editMode: true})
    }

    changeEditModeOff() {
        this.setState({editMode: false})
    }

    render() {
        return <>
            {!this.state.editMode && <div>
                <span
                    onDoubleClick={this.changeEditModeOn.bind(this)}
                > {this.props.value} </span>
            </div>}
            {this.state.editMode && <div>
                <input
                    autoFocus={true}
                    onBlur={this.changeEditModeOff.bind(this)}
                    value={this.props.value}/>
            </div>}

        </>
    }

}