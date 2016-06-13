var rootFontSize = 16; // By default browsers have a font-size of 16px.

/**
 * Convert pixels to em.
 * @param  {String|Number} pxValue value in pixel unit
 * @return {String}                value in em unit
 */
function convertToEm(pxValue) {
  return pxValue / rootFontSize + 'em';
}

/**
 * Convert a sequence of pixel values to em values.
 * @param  {String|Number} pxValues values in px unit
 * @return {String}                 values in em unit
 */
function em(pxValues) {
  var emValues = String(pxValues).split(' ');
  emValues = emValues.map(convertToEm);
  emValues = emValues.join(' ');

  return emValues;
}

exports.default = em;
module.exports = exports['default'];
