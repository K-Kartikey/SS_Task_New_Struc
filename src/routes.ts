import express from 'express';
import bookLinks from './controller'
const router = express.Router();

router.get(
    '/book',
    bookLinks.getAll
);

router.get(
    '/book/:id',
    bookLinks.getId
    
);

router.post(
    '/book/create',
    bookLinks.newBook
);

router.patch(
    '/book/update/:id',
    bookLinks.updateBook
);

router.delete(
    '/book/delete/:id',
    bookLinks.deleteBook
);

export default router;