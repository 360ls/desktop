import React from 'react';
import RecordControl from '../containers/RecordControl';
import PreviewControl from '../containers/PreviewControl';
import Notification from '../containers/Notification';

const LivePage = () => (
  <div>
    <RecordControl />
    <br />
    <PreviewControl />
    <Notification />
  </div>
);

export default LivePage;
