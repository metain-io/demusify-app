import { CreatorController } from '../controllers/creator-controller';
import {
    CollectionController,
    ItemController,
    MeController,
    PaymentController,
    S3Controller,
} from '../controllers/index';
import { UserController } from '../controllers/user-controller';
import { accessTokenAuthentication } from '../middlewares/index';
import express from 'express';

const apiRouter = express.Router();

// USER
apiRouter.get('/user/nftData/:username', accessTokenAuthentication, new UserController().getNftData);

// CREATOR
apiRouter.get('/creator/:username', new CreatorController().getCreator);
apiRouter.put('/creator/:username', accessTokenAuthentication, new CreatorController().updateCreator);

// COLLECTION
apiRouter.post('/collections', accessTokenAuthentication, new CollectionController().createCollection);
apiRouter.get('/collections', new CollectionController().listCollections);
apiRouter.get('/collections/:collectionId', new CollectionController().getCollection);
apiRouter.put('/collections/:collectionId', accessTokenAuthentication, new CollectionController().updateCollection);
apiRouter.delete('/collections/:collectionId', accessTokenAuthentication, new CollectionController().deleteCollection);

// ITEM
apiRouter.post('/items', accessTokenAuthentication, new ItemController().createItem);
apiRouter.get('/items', new ItemController().listItems);
apiRouter.get('/items/:itemId', new ItemController().getItem);
apiRouter.get('/items/:itemId/transactions', new ItemController().listItemTransactions);
apiRouter.put('/items/:itemId', accessTokenAuthentication, new ItemController().updateItem);
apiRouter.delete('/items/:itemId', accessTokenAuthentication, new ItemController().deleteItem);

// ME
apiRouter.get('/me/collections', accessTokenAuthentication, new MeController().listCollections);
apiRouter.get('/me/creations', accessTokenAuthentication, new MeController().listCreations);
apiRouter.get('/me/licenses', accessTokenAuthentication, new MeController().listLicenses);

// S3
apiRouter.get('/s3/signed-url', accessTokenAuthentication, new S3Controller().getSignedUrl);

// PAYMENT
apiRouter.post('/payments', accessTokenAuthentication, new PaymentController().createPayment);

export { apiRouter };
