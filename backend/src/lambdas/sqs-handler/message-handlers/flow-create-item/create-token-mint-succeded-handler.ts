import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createTokenMintSucceededHandler(data: any) {
    const { item } = data;
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
        item.state = 'CREATE_TOKEN_MINT_METADATA_SUCCEEDED';
        await itemService.updateItem(item.id, item);

        // TODO: send sqs message: CREATE_TOKEN_MINT_METADATA_SUCCEEDED
        await sendSqsMessage({
            type: 'CREATE_TOKEN_MINT_METADATA_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'CREATE_TOKEN_MINT_METADATA_FAILED';
        await itemService.updateItem(item.id, item);

        // TODO: send sqs message: CREATE_TOKEN_MINT_METADATA_FAILED
        await sendSqsMessage({
            type: 'CREATE_TOKEN_MINT_METADATA_FAILED',
            data: { item: item },
        });
    }
}
