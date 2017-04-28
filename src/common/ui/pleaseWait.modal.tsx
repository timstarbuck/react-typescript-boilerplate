import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Modal} from 'react-bootstrap';
import {Loader} from './Loader';
// import { VelocityTransitionGroup } from 'velocity-react';

interface Props {
    ajaxStatus: Number;
}

export class PleaseWaitModal extends React.Component<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
                showModal: false
        };
    }

    public componentWillReceiveProps(newProps: Props) {
        this.setState({showModal: newProps.ajaxStatus > 0});
    }

    public render() {
        return (
            <div>
                {
                    (this.state.showModal) && <Loader />
                }
            </div>
        );
    }

    private onHide() {
        // do nothing here...
    }
}

const mapStateToProps = (state) => {
    return{
        ajaxStatus: state.ajaxStatusReducer
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (loginInfo: session.LoginCredentials) => {
//             return dispatch(LoginRequest(loginInfo));
//         },
//         updateLoginInfo: (loginInfo: session.LoginCredentials) => {
//             dispatch(loginAction(loginInfo));
//         }
//     };
// };

export const PleaseWaitModalContainer = connect(mapStateToProps, null)(PleaseWaitModal);
