const { Router } = require('express');
const router = Router();

const { notesRenderForms,
        createNewForm,
        renderNotesAll,
        renderUpdateNote,
        UpdateNote,
        DeleteNotes } = require('../controller/notes.controller');

// NEW NOTE
router.get('/notes/add', notesRenderForms);
router.post('/note/add', createNewForm);

// GET ALL NOTES
router.get('/notes', renderNotesAll);

//  UPDATE NOTES
router.get('/notes/edit/:id', renderUpdateNote)
router.put('/notes/edit/:id', UpdateNote)

// DELETE NOTES

router.delete('/notes/delete/:id', DeleteNotes)


module.exports = router;