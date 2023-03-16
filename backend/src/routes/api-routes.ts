import express from 'express';
import { CreatorController } from '@controllers/creator-controller';
import { CollectionController, ItemController, MeController, S3Controller } from '@controllers/index';
import { accessTokenAuthentication } from '@middlewares/index';
import { NFTCreationController } from '@controllers/nft-creation-controller';
import { NFTLicensedController } from '@controllers/nft-licensed-controller';
import { NFTActivitiesController } from '@controllers/nft-activities-controller';
import { UserController } from '@controllers/user-controller';

const apiRouter = express.Router();

apiRouter.get('/creation/:username', accessTokenAuthentication, new NFTCreationController().getNFTCreationByUsername);

apiRouter.get('/licensed/:username', accessTokenAuthentication, new NFTLicensedController().getNFTLicensedByUsername);

apiRouter.get('/activities/:username', accessTokenAuthentication, new NFTActivitiesController().getNFTActivitiesByUsername);

apiRouter.get('/user/nftData/:username', accessTokenAuthentication, new UserController().getNftData);

apiRouter.get('/creator/:username', new CreatorController().getCreator);
apiRouter.put('/creator/:username', accessTokenAuthentication, new CreatorController().updateCreator);

apiRouter.post('/collections', accessTokenAuthentication, new CollectionController().createCollection);
apiRouter.get('/collections', new CollectionController().listCollections);
apiRouter.get('/collections/:collectionId', new CollectionController().getCollection);
apiRouter.put('/collections/:collectionId', accessTokenAuthentication, new CollectionController().updateCollection);
apiRouter.delete('/collections/:collectionId', accessTokenAuthentication, new CollectionController().deleteCollection);

apiRouter.post('/items', accessTokenAuthentication, new ItemController().createItem);
apiRouter.get('/items', new ItemController().listItems);
apiRouter.get('/items/:itemId', new ItemController().getItem);
apiRouter.put('/items/:itemId', accessTokenAuthentication, new ItemController().updateItem);
apiRouter.delete('/items/:itemId', accessTokenAuthentication, new ItemController().deleteItem);

apiRouter.get('/me/collections', accessTokenAuthentication, new MeController().listCollections);

apiRouter.get('/s3/signed-url', accessTokenAuthentication, new S3Controller().getSignedUrl);

export { apiRouter };
