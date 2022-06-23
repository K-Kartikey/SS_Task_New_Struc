import express from 'express';
import bookLinks from './controller'
const router = express.Router();

router.get(
    '/',
    bookLinks.getAll
);

router.get(
    '/:id',
    bookLinks.getId
    
);

router.post(
    '/createbook',
    bookLinks.newBook
);

router.patch(
    '/update/:id',
    bookLinks.updateBook
);

router.delete(
    '/delete/:id',
    bookLinks.deleteBook
);

export default router;