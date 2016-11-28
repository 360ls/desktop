import React from 'react';
import RecordControl from '../containers/RecordControl';
import PreviewControl from '../containers/PreviewControl';
import StreamControl from '../containers/StreamControl';
import Notification from '../containers/Notification';

const LivePage = () => (
  <div>
    <RecordControl />
    <br />
    <PreviewControl />
    <br />
    <StreamControl />
    <Notification />
  </div>
);

export default LivePage;
