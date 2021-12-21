import { FC } from 'react';

import { AddMessageForm, FormDialogsDataType } from './AddMessageForm/AddMessageForm';
import style from './Dialogs.module.css';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Message } from './Message/Message';

import { DialogsType, MessagesType } from 'types';

export const Dialogs: FC<PropsType> = ({ sendMessage, dialogs, messages }) => {
  const dialogsElements = dialogs.map(dialog => (
    <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = messages.map(message => (
    <Message key={message.id} message={message.message} />
  ));

  const addNewMessage = (formData: FormDialogsDataType) => {
    sendMessage(formData.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

// types
type PropsType = {
  sendMessage: (newMessageBody: string) => void;
  dialogs: DialogsType[];
  messages: MessagesType[];
};
