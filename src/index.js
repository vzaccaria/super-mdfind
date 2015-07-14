var {
    docopt
} = require('docopt')
var _ = require('lodash')
var fs = require('fs')
var doquery = require('./lib/workflow')

var getOption = (a, b, def, o) => {
    "use strict"
    if (!_.isUndefined(o[a])) {
        return o[a]
    } else {
        if (!_.isUndefined(o[b])) {
            return o[b]
        } else {
            return def
        }
    }
}



var getOptions = doc => {
    "use strict"
    var o = docopt(doc)
    var query = o.QUERY || null
    var help = getOption('-h', '--help', false, o)
    return {
        help, query
    }
}

var doc = fs.readFileSync(__dirname + "/docs/usage.md", 'utf8')

var main = () => {
    "use strict"
    var {
        help, query
    } = (getOptions(doc))
    doquery(query)
}

main()
