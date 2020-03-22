notesController = {}

notesController.notesRenderForms = (req, res) => {
    res.send('note add')
}
notesController.createNewForm = (req, res) => {
    res.send('create note')
}
notesController.renderNotesAll = (req,res)=> {
    res.send('all notes')
}
notesController.renderUpdateNote = (req, res)=>{
    res.send('edit notes')
}
notesController.UpdateNote = (req, res)=>{
    res.send('edit notes')
}
notesController.DeleteNotes = (req, res) => {
    res.send('delete note')
}
module.exports = notesController;