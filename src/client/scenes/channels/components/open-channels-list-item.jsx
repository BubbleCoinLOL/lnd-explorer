import React from 'react';
import PropTypes from 'prop-types';
import { BoolValue } from '../../../components/bool-value';
import { BtcAmount } from '../../../components/btc-amount';
import { Hex } from '../../../components/hex';
import { CloseChannelModal } from '../../close-channel/close-channel-modal';

export const OpenChannelsListItem = ({ channel }) => (
  <tr>
    <td>
      <CloseChannelModal channel={channel} />
    </td>
    <td>
      <BoolValue value={channel.active} />
    </td>
    <td>
      <Hex value={channel.remote_pubkey} />
    </td>
    <td>
      <Hex value={channel.channel_point} />
    </td>
    <td>{channel.chan_id}</td>
    <td>
      <BtcAmount satoshi={channel.capacity} />
    </td>
    <td>
      <BtcAmount satoshi={channel.local_balance} />
    </td>
    <td>
      <BtcAmount satoshi={channel.remote_balance} />
    </td>
    <td>
      <BtcAmount satoshi={channel.unsettled_balance} />
    </td>
    <td>
      <BtcAmount satoshi={channel.commit_fee} />
    </td>
    <td>
      <BtcAmount satoshi={channel.commit_weight} />
    </td>
    <td>
      <BtcAmount satoshi={channel.fee_per_kw} />
    </td>

    <td>
      <BtcAmount satoshi={channel.total_satoshis_sent} />
    </td>
    <td>
      <BtcAmount satoshi={channel.total_satoshis_received} />
    </td>
  </tr>
);

OpenChannelsListItem.propTypes = {
  channel: PropTypes.object,
};
