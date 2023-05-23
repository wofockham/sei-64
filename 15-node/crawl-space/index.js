const Crawler = require('crawler');

// Returns true if a given URL should be crawled, false otherwise.
const isCrawlable = (url) => {
    if (url.includes('archive')) { // TODO: make this way better
        return false;
    } else {
        return true;
    }
};

const c = new Crawler({
    rateLimit: 1000,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
    callback: (err, res, done) => {
        console.log(res.request.uri.href); // log out the current page
        const title = res.$('title').text();
        console.log(title);
        console.log(); // blank line for readability

        const $links = res.$('a[href^=http]'); // select only external links
        $links.each(function () {
            const href = res.$(this).attr('href');
            if (isCrawlable(href)) {
                c.queue(href);
            }
        })

        done();
    } 
});

c.queue('https://lobste.rs/'); // TODO: make this dynamic

