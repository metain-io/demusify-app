import { createItemCommandHandler } from './command-handlers/create-item-command-handler';
import { createItemPaymentCommandHandler } from './command-handlers/create-item-payment-command-handler';
import { itemCreatedEventHandler } from './event-handlers/item-created-event-handler';
import { itemPaymentCreatedEventHandler } from './event-handlers/item-payment-created-event-handler';
import { itemPaymentVerifiedEventHandler } from './event-handlers/item-payment-verified-event-handler';
import { itemTokenMintCreatedEventHandler } from './event-handlers/item-token-mint-created-event-handler';
import { itemTokenMintMetadataCreatedEventHandler } from './event-handlers/item-token-mint-metadata-created-event-handler';
import { itemTokenMintedToMasterEventHandler } from './event-handlers/item-token-minted-to-master-event-handler';
import { itemTokenTransferedToPayerEventHandler } from './event-handlers/item-token-transfered-to-payer-event-handler';

export const messageBus = {
    // CREAT ITEM
    CREATE_ITEM: createItemCommandHandler,

    ITEM_CREATED: itemCreatedEventHandler,
    ITEM_TOKEN_MINT_CREATED: itemTokenMintCreatedEventHandler,
    ITEM_TOKEN_MINT_METADATA_CREATED: itemTokenMintMetadataCreatedEventHandler,
    ITEM_TOKEN_MINTED_TO_MASTER: itemTokenMintedToMasterEventHandler,

    // CREATE ITEM PAYMENT
    CREATE_ITEM_PAYMENT: createItemPaymentCommandHandler,

    ITEM_PAYMENT_CREATED: itemPaymentCreatedEventHandler,
    ITEM_PAYMENT_VERIFIED: itemPaymentVerifiedEventHandler,
    ITEM_TOKEN_TRANSFERED_TO_PAYER: itemTokenTransferedToPayerEventHandler,
};
