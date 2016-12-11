import React from 'react';
import RecordControl from '../containers/RecordControl';
import PreviewControl from '../containers/PreviewControl';
import StreamControl from '../containers/StreamControl';
import Notification from '../containers/Notification';

const LivePage = () => (
  <div id="live-page" className="container">
    <div className="jumbotron">
      <h2>
        This portion of the application would typically show a view
        of the live video inside the car. But, at the moment, our live
        preview only works outside of the Electron application.
      </h2>
    </div>
    <div className="row">
      <div className="col-md-4">
        <RecordControl />
      </div>
      <div className="col-md-4">
        <StreamControl />
      </div>
      <div className="col-md-4">
        <PreviewControl />
      </div>
    </div>
    <Notification />
  </div>
);

export default LivePage;
