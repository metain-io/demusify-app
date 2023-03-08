import express from 'express';
import { CollectionController, ItemController } from '@controllers/index';

const apiRouter = express.Router();

apiRouter.post('/collections', new CollectionController().createCollection);
apiRouter.get('/collections', new CollectionController().listCollections);
apiRouter.get('/collections/:collectionId', new CollectionController().getCollection);
apiRouter.put('/collections/:collectionId', new CollectionController().updateCollection);
apiRouter.delete('/collections/:collectionId', new CollectionController().deleteCollection);

apiRouter.post('/items', new ItemController().createItem);
apiRouter.get('/items', new ItemController().listItems);
apiRouter.get('/items/:itemId', new ItemController().getItem);
apiRouter.put('/items/:itemId', new ItemController().updateItem);
apiRouter.delete('/items/:itemId', new ItemController().deleteItem);

export { apiRouter };
