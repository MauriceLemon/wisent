import React from 'react';
import Header from './Header';

const layout: React.FC = (props) => (
  <>
    <Header />
    <div>Sidebar</div>
    <div>Backdrop</div>
    <main>
      {props.children}
    </main>
  </>
);

export default layout;
