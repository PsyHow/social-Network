import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Dialogs } from './Dialogs';

import { sendMessage, AppStateType } from 'BLL';
import { withAuthRedirect } from 'hoc';
import { getDialogs, getMessages } from 'selectors';
import { DialogsType, MessagesType } from 'types';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  dialogs: getDialogs(state),
  messages: getMessages(state),
});
// important type compose with generic <React.ComponentType>
export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect,
)(Dialogs);

// types
type MapStateToPropsType = {
  dialogs: DialogsType[];
  messages: MessagesType[];
};
