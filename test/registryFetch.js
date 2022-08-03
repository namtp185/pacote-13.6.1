const fetch = require('npm-registry-fetch')


async function test() {
    // console.log('https://npm.im/~zkat has access to the following packages:')
    // for await (let {key, value} of fetch.json.stream('/-/user/zkat/package', '$*')) {
    //     console.log(`https://npm.im/${key} (perms: ${value})`)
    // }

    const res = await fetch('https://registry.npmjs.org/underscore', {
        fullReadJson: true,
    });
    // console.log(JSON.stringify(res.body));
    console.log(res.body)
    const packument = await res.json();
    console.log(packument)
}

test();