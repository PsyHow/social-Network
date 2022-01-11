import { ChangeEvent, FC, useEffect, useState } from 'react';

export const ProfileStatusWithHooks: FC<PropsType> = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [myStatus, setMyStatus] = useState(status);

  useEffect(() => {
    setMyStatus(status);
  }, [status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const diactivateMode = () => {
    setEditMode(false);
    updateStatus(myStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMyStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div style={{ marginTop: '20px' }}>
          <b>Status: </b>
          <span onDoubleClick={activateMode}>{status || 'Enter your status'}</span>
        </div>
      )}
      {editMode && (
        <div style={{ marginTop: '20px' }}>
          <input
            onBlur={diactivateMode}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={onStatusChange}
            value={myStatus}
          />
        </div>
      )}
    </div>
  );
};

// types
type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};
