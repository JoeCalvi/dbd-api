module.exports = function (app) {
  const chaptersController = require('../controllers/ChaptersController')

  app.route('/chapters')
      .get(chaptersController.getAllChapters);

  app.route('/chapters/query')
      .get((req, res) => {
          // ?killer_name=the-killerName
          // will return that specific killer's chapter
          if (req.query.killerName) {
              return chaptersController.getChapterByKillerName(req, res);
          // ?survivor_name=firstName-lastName
          // will return that specific killer's chapter
          } else if (req.query.survivorName) {
              return chaptersController.getChapterBySurvivorName(req, res);
          }
      })

  app.route('/chapters/:chapterId')
      .get(chaptersController.getChapterById);
};