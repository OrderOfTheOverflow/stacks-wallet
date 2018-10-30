// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from '../containers/ActionButtons'
import Button from '../containers/Button'
import Blob from '../components/Blob'
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {};

export default class Dashboard extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props)
  }

  render() {

    const { 
      address,
      stacksBalance,
      btcBalance
    } = this.props

    return (
      <div>
        <div>
          <p>Your Stacks Address:</p>
          {address}
          <p>Your Balance:</p>
          <h2>{stacksBalance} Stacks</h2>
          {/*{btcBalance} Bitcoin*/}
        </div>
        <br/><br/>
{/*        <Button to="/send" height={25} small>
          Send
        </Button>
        &nbsp;
        <Button to="/send" height={25} small>
          Receive
        </Button>*/}

        <ActionButtons>
          <Button to="/send">Send</Button>
          <Button to="/send">Receive</Button>
        </ActionButtons>

      </div>
    );
  }
}
