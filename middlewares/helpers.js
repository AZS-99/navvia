module.exports.obj_filter_out_falsy = (obj) => {
    const filtered = Object.entries(obj).filter(([key, value]) => !!value)
    return Object.fromEntries(filtered)
}