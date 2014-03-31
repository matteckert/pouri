require('should');
var pouri = require('../lib/pouri');

describe('pouri', function() {
    it('http uri has correct authority', function() {
        pouri('http://example.com').authority.should.equal('example.com');
    });

    it('mailto uri has correct path', function() {
        pouri('mailto:a@example.com').path.should.equal('a@example.com');
    });

    it('parses a uri given as an object', function() {
        String(pouri({
            authority: 'example.com',
            scheme: 'https',
            query: 'a=b&c=d',
            path: '/user/1',
            fragment: 'hobbies'
        })).should.equal('https://example.com/user/1?a=b&c=d#hobbies');
    });
});
