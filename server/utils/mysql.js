const mysql = require('mysql');

const mysqlConfig = require('./mysql.conf');

module.exports = {
    query: (sql, params, cb) => {
        const connection = mysql.createConnection(mysqlConfig);

        connection.connect((err) => {
            if (err) {
                console.log('数据库连接失败');
                throw err;
            }
        });
        connection.query(sql, params, (err, result, fields) => {
            if (err) {
                console.log('数据库操作失败');
            }
            cb && cb(result, fields);
            connection.end((err) => {
                if (err) {
                    console.log('关闭数据库连接失败');
                    throw err;
                }
            })
        })
    }
};
