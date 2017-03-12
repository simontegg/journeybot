const config = require('./config.json')



/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloHttp = function helloHttp (req, res) {
   if (req.query['hub.verify_token'] === config.verifyToken) {
      res.send(req.query['hub.challenge'])
   } else {
      res.send('Error, wrong validation token');    
   }
}
