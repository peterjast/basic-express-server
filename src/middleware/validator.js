'use strict';

const validator = (req, res, next) => {
  req.query.name ? next() : next('no name entered');
};

module.exports = validator;
