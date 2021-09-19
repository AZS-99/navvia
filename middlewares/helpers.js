module.exports.obj_filter_out_falsy = (obj) => {
    const filtered = Object.entries(obj).filter(([key, value]) => !!value)
    return Object.fromEntries(filtered)
}


module.exports.obj_toLowerCase = (obj) => {
    Object.keys(obj).map((key, index) => {
        obj[key] = obj[key].toLowerCase()
    })
}