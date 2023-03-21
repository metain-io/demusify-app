import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemTokenMintCreatedEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const onChainMetadataUri = await solanaService.uploadMetadata({
            name: item.name,
            symbol: ``,
            description: item.description,
            image: item.coverArtImage,
            external_url: item.externalLink,
        });

        const createTokenMintMetadataSignature = await solanaService.createTokenMintMetadata(item.tokenMintAddress, {
            name: item.name,
            symbol: '',
            uri: onChainMetadataUri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
        });

        item.onChainMetadataUri = onChainMetadataUri;
        item.createTokenMintMetadataSignature = createTokenMintMetadataSignature;
        item.state = 'ITEM_TOKEN_MINT_METADATA_CREATED';
        await itemService.updateItem(item.itemID, item);

        await sendSqsMessage({
            type: 'ITEM_TOKEN_MINT_METADATA_CREATED',
            input: { item },
        });
    } catch (error) {
        console.log('CREATE_ITEM_TOKEN_MINT_METADATA_FAILED', item, error);

        item.state = 'CREATE_ITEM_TOKEN_MINT_METADATA_FAILED';
        await itemService.updateItem(item.itemID, item);
    }
}
