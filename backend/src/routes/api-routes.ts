import express from 'express';
import { CollectionController, ItemController } from '@controllers/index';

const apiRouter = express.Router();

apiRouter.post('/collections', new CollectionController().createCollection);
apiRouter.get('/collections', new CollectionController().listCollections);
apiRouter.get('/collections/:collection-id', new CollectionController().getCollection);
apiRouter.put('/collections/:collection-id', new CollectionController().updateCollection);
apiRouter.delete('/collections/:collection-id', new CollectionController().deleteCollection);

apiRouter.post('/items', new ItemController().createItem);
apiRouter.get('/items', new ItemController().listItems);
apiRouter.get('/items/:item-id', new ItemController().getItem);
apiRouter.put('/items/:item-id', new ItemController().updateItem);
apiRouter.delete('/items/:item-id', new ItemController().deleteItem);

export { apiRouter };
