const Crawler = require('crawler');

// Returns true if a given URL should be crawled, false otherwise.
const isCrawlable = (url) => {
    const terribleSites = ['archive.today', 'ghostarchive.org', 'web.archive.org', 'twitter.com', 'facebook.com', 'microsoft.com', 'vimeo.com'];

    // magic
    const terribleSiteDetected = terribleSites.some((awfulSite) => {
        return url.includes(awfulSite);
    });

    // heavy magic
    // const terribleSiteDetected = terribleSites.some( (awfulSite) => url.includes(awfulSite) );

    return !terribleSiteDetected;

};

const c = new Crawler({
    rateLimit: 1000,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
    callback: (err, res, done) => {
        if (typeof res.$ === 'function') {
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
            });
        }

        done();
    } 
});

// process.argv contains command line arguments (and some other crap) /bin/node index.js HERE IS THE GOOD STUFF
c.queue(process.argv[2] || 'https://lobste.rs/');
