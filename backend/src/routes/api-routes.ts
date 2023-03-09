import express from 'express';
import { CollectionController, ItemController } from '@controllers/index';
import { accessTokenAuthentication } from '@middlewares/index';

const apiRouter = express.Router();

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

export { apiRouter };
