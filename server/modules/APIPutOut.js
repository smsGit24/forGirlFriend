function extendAPIPutOut (req, res, next) {
    // 成功
    res.apiSuccess = (data) => {
        res.json({
            status: 1,
            result: data
        });
    };

    // 失败
    res.apiError = (err) => {
        res.json({
            status: 0,
            err_code: err.err_code || 'UNKNOWN',
            err_msg: err.err_msg || err.toString()
        });
    };

    next();
}

module.exports = extendAPIPutOut;
