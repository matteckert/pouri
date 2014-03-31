module.exports = exports = function(s) { var m = r.exec(s); return Object.create(o, {
    scheme   : { value: s.scheme    || m[2] || '', writeable: true },
    authority: { value: s.authority || m[4] || '', writeable: true },
    path     : { value: s.path      || m[5] || '', writeable: true },
    query    : { value: s.query     || m[7] || '', writeable: true },
    fragment : { value: s.fragment  || m[9] || '', writeable: true }
});};

var o = Object.create({}, { toString : { value: function() {
    return (this.scheme    ? this.scheme + ':'     : '') +
           (this.authority ? '//' + this.authority : '') +
           (this.path      ? this.path             : '') +
           (this.query     ? '?' + this.query      : '') +
           (this.fragment  ? '#' + this.fragment   : '');
}}}), r = /^(([^:\/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
