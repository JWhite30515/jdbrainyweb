import * as React from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

export interface IModalProps {
  children: any;
  footerElement?: JSX.Element;
  title: string;
  setModalOpen(open: boolean): void;
}

export default function Modal(props: IModalProps) {
  const { footerElement, title, setModalOpen } = props;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div
          className="nav light-green-back flex-row"
          style={{ height: footerElement ? '10%' : '20%' }}
        >
          <span style={{ flex: 1 }} />
          <h1 style={{ flex: 1 }}>{title}</h1>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IoMdCloseCircle
              className="clickable"
              onClick={() => setModalOpen(false)}
              style={{ paddingRight: '10px' }}
              size={'3em'}
            />
          </div>
        </div>
        <div className="flex-row" style={{ maxHeight: '80%', alignItems: 'flex-start' }}>
          {props.children}
        </div>
        {footerElement &&
          <div
            className="light-green-back flex-row"
            style={{ height: '10%', justifyContent: 'center', marginTop: 'auto' }}
          >
            {footerElement}
          </div>
        }
      </div>
    </div>
  );
}