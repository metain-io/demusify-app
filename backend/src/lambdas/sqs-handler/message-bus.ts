import {
    createNewItemSucceededHandler,
    createTokenMintFailedHandler,
    createTokenMintMetadataFailedHandler,
    createTokenMintMetadataSucceededHandler,
    createTokenMintSucceededHandler,
    markItemCreationCompletedFailedHandler,
    markItemCreationCompletedSucceededHandler,
    mintTokenToMasterFailedHandler,
    mintTokenToMasterSucceededHandler,
    transferTokenToCreatorFailedHandler,
    transferTokenToCreatorSucceededHandler,
} from './message-handlers/flow-create-item';
import {
    checkItemPaymentFailedHandler,
    checkItemPaymentInvalidatedHandler,
    checkItemPaymentValidatedHandler,
    createNewItemPaymentSucceededHandler,
    markItemPaymentCreationCompletedFailedHandler,
    markItemPaymentCreationCompletedSucceededHandler,
    transferSolToCreatorFailedHandler,
    transferSolToCreatorSucceededHandler,
    transferTokenToPayerFailedHandler,
    transferTokenToPayerSucceededHandler,
} from './message-handlers/flow-purchase-item';

export enum FlowCreateItemMessageTypes {
    CREATE_NEW_ITEM_SUCCEEDED = 'CREATE_NEW_ITEM_SUCCEEDED',
    CREATE_TOKEN_MINT_SUCCEEDED = 'CREATE_TOKEN_MINT_SUCCEEDED',
    CREATE_TOKEN_MINT_METADATA_SUCCEEDED = 'CREATE_TOKEN_MINT_METADATA_SUCCEEDED',
    MINT_TOKEN_TO_MASTER_SUCCEEDED = 'MINT_TOKEN_TO_MASTER_SUCCEEDED',
    TRANSFER_TOKEN_TO_CREATOR_SUCCEEDED = 'TRANSFER_TOKEN_TO_CREATOR_SUCCEEDED',
    MARK_ITEM_CREATION_COMPLETED_SUCCEEDED = 'MARK_ITEM_CREATION_COMPLETED_SUCCEEDED',

    CREATE_TOKEN_MINT_FAILED = 'CREATE_TOKEN_MINT_FAILED',
    CREATE_TOKEN_MINT_METADATA_FAILED = 'CREATE_TOKEN_MINT_METADATA_FAILED',
    MINT_TOKEN_TO_MASTER_FAILED = 'MINT_TOKEN_TO_MASTER_FAILED',
    TRANSFER_TOKEN_TO_CREATOR_FAILED = 'TRANSFER_TOKEN_TO_CREATOR_FAILED',
    MARK_ITEM_CREATEION_COMPLETED_FAILED = 'MARK_ITEM_CREATEION_COMPLETED_FAILED',
}

export enum FlowPurchaseItemMessageTypes {
    CREATE_NEW_ITEM_PAYMENT_SUCCEEDED = 'CREATE_NEW_ITEM_PAYMENT_SUCCEEDED',
    CHECK_ITEM_PAYMENT_VALIDATED = 'CHECK_ITEM_PAYMENT_VALIDATED',
    TRANSFER_TOKEN_TO_PAYER_SUCCEEDED = 'TRANSFER_TOKEN_TO_PAYER_SUCCEEDED',
    TRANSFER_SOL_TO_CREATOR_SUCCEEDED = 'TRANSFER_SOL_TO_CREATOR_SUCCEEDED',
    MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED = 'MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED',

    CHECK_ITEM_PAYMENT_INVALIDATED = 'CHECK_ITEM_PAYMENT_INVALIDATED',
    CHECK_ITEM_PAYMENT_FAILED = 'CHECK_ITEM_PAYMENT_FAILED',
    TRANSFER_TOKEN_TO_PAYER_FAILED = 'TRANSFER_TOKEN_TO_PAYER_FAILED',
    TRANSFER_SOL_TO_CREATOR_FAILED = 'TRANSFER_SOL_TO_CREATOR_FAILED',
    MARK_ITEM_PAYMENT_CREATEION_COMPLETED_FAILED = 'MARK_ITEM_PAYMENT_CREATEION_COMPLETED_FAILED',
}

const messageBus = {
    // Flow Create Item
    [FlowCreateItemMessageTypes.CREATE_NEW_ITEM_SUCCEEDED]: createNewItemSucceededHandler,
    [FlowCreateItemMessageTypes.CREATE_TOKEN_MINT_SUCCEEDED]: createTokenMintSucceededHandler,
    [FlowCreateItemMessageTypes.CREATE_TOKEN_MINT_METADATA_SUCCEEDED]: createTokenMintMetadataSucceededHandler,
    [FlowCreateItemMessageTypes.MINT_TOKEN_TO_MASTER_SUCCEEDED]: mintTokenToMasterSucceededHandler,
    [FlowCreateItemMessageTypes.TRANSFER_TOKEN_TO_CREATOR_SUCCEEDED]: transferTokenToCreatorSucceededHandler,
    [FlowCreateItemMessageTypes.MARK_ITEM_CREATION_COMPLETED_SUCCEEDED]: markItemCreationCompletedSucceededHandler,

    [FlowCreateItemMessageTypes.CREATE_TOKEN_MINT_FAILED]: createTokenMintFailedHandler,
    [FlowCreateItemMessageTypes.CREATE_TOKEN_MINT_METADATA_FAILED]: createTokenMintMetadataFailedHandler,
    [FlowCreateItemMessageTypes.MINT_TOKEN_TO_MASTER_FAILED]: mintTokenToMasterFailedHandler,
    [FlowCreateItemMessageTypes.TRANSFER_TOKEN_TO_CREATOR_FAILED]: transferTokenToCreatorFailedHandler,
    [FlowCreateItemMessageTypes.MARK_ITEM_CREATEION_COMPLETED_FAILED]: markItemCreationCompletedFailedHandler,

    // Flow Purchase Item
    [FlowPurchaseItemMessageTypes.CREATE_NEW_ITEM_PAYMENT_SUCCEEDED]: createNewItemPaymentSucceededHandler,
    [FlowPurchaseItemMessageTypes.CHECK_ITEM_PAYMENT_VALIDATED]: checkItemPaymentValidatedHandler,
    [FlowPurchaseItemMessageTypes.TRANSFER_TOKEN_TO_PAYER_SUCCEEDED]: transferTokenToPayerSucceededHandler,
    [FlowPurchaseItemMessageTypes.TRANSFER_SOL_TO_CREATOR_SUCCEEDED]: transferSolToCreatorSucceededHandler,
    [FlowPurchaseItemMessageTypes.MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED]:
        markItemPaymentCreationCompletedSucceededHandler,

    [FlowPurchaseItemMessageTypes.CHECK_ITEM_PAYMENT_INVALIDATED]: checkItemPaymentInvalidatedHandler,
    [FlowPurchaseItemMessageTypes.CHECK_ITEM_PAYMENT_FAILED]: checkItemPaymentFailedHandler,
    [FlowPurchaseItemMessageTypes.TRANSFER_TOKEN_TO_PAYER_FAILED]: transferTokenToPayerFailedHandler,
    [FlowPurchaseItemMessageTypes.TRANSFER_SOL_TO_CREATOR_FAILED]: transferSolToCreatorFailedHandler,
    [FlowPurchaseItemMessageTypes.MARK_ITEM_PAYMENT_CREATEION_COMPLETED_FAILED]:
        markItemPaymentCreationCompletedFailedHandler,
};
