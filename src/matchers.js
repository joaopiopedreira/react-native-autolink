/*!
 * React Native Autolink
 *
 * Copyright 2016-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-autolink/blob/master/LICENSE
 */

import Autolinker from 'autolinker';

export default [
  // LatLng
  {
    id: 'latlng',
    regex: /[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)/g,
    Match: Autolinker.Util.extend(Autolinker.match.Match, {
      constructor(cfg) {
        Autolinker.match.Match.prototype.constructor.call(this, cfg);

        this.latlng = cfg.latlng;
      },
      getType() {
        return 'latlng';
      },
      getLatLng() {
        return this.latlng;
      },
      getAnchorHref() {
        return this.latlng;
      },
      getAnchorText() {
        return this.latlng;
      },
    }),
  },
  // Phone override
  {
    id: 'phone',
    regex: /(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)(1|44|33|351|353|49)\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?\d{5,6})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?/g,
    Match: Autolinker.Util.extend(Autolinker.match.Match, {
      constructor(cfg) {
        Autolinker.match.Match.prototype.constructor.call(this, cfg);
        this.number = cfg.phone;
      },
      getType() {
        return 'phone';
      },
      getNumber() {
        return this.number;
      },
      getAnchorHref() {
        return `tel:${this.number}`;
      },
      getAnchorText() {
        return this.matchedText;
      },
    }),
  },
];
