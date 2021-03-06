// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { promise } from '../../_support/utils';

// Assets and helpers
import WalletsWrapper from '../utils/WalletsWrapper';

// Screens
import WalletSendForm from '../../../../source/renderer/app/components/wallet/WalletSendForm';

storiesOf('Wallets|Actions', module)
  .addDecorator(WalletsWrapper)
  .add('Send', () => (
    <WalletSendForm
      currencyUnit="Ada"
      currencyMaxFractionalDigits={6}
      currencyMaxIntegerDigits={11}
      validateAmount={promise(true)}
      calculateTransactionFee={promise(true)}
      addressValidator={action('addressValidator')}
      openDialogAction={action('openDialogAction')}
      isDialogOpen={() => boolean('isDialogOpen', false)}
      isRestoreActive={boolean('isRestoreActive', false)}
    />
  ));
