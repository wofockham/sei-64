const vocabController = require('../controllers/vocabController');

module.exports = (app) => {
    app
        .route('/words')
        .get(vocabController.listWords)
        .post(vocabController.createWord);

    app
        .route('/words/:wordId')
        .get(vocabController.readWord)
        .put(vocabController.updateWord)
        .delete(vocabController.deleteWord);
};
