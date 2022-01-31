import React, { ChangeEvent } from "react";


type ProfilePropsType = {
    value: string
    UpDateStatusAPI: (value: string) => void
}

export class ProfileStatus extends React.Component<ProfilePropsType> {
    state = {
        editMode: false,
        status: this.props.value,
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    changeEditModeOn() {
        this.setState({editMode: true})
    }

    changeEditModeOff = () => {
        this.setState({editMode: false})
        this.props.UpDateStatusAPI(this.state.status)
    }

    render() {
        return <>
            {!this.state.editMode && <div>
                <span
                    onDoubleClick={this.changeEditModeOn.bind(this)}
                > {this.props.value || '--------'} </span>
            </div>}
            {this.state.editMode && <div>
                <input
                    autoFocus={true}
                    onBlur={this.changeEditModeOff}
                    onChange={this.onStatusChange}
                    value={this.state.status}/>
            </div>}

        </>
    }

}