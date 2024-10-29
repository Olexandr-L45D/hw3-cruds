import { Router } from 'express';

const router = Router();
import {
    contactAllControl, contactByIdControl, createContactController,
    deleteContactControl, upsertContactControl, patchContactControl
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

router.get('/contacts', ctrlWrapper(contactAllControl));

router.get('/contacts/:contactId', ctrlWrapper(contactByIdControl));

router.post('/contacts', ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactControl));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactControl));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactControl));

export default router;
