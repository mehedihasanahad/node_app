const fs = require('fs');

module.exports = (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    // const userObj = { user: { username: username, password: password } };

    // fs.appendFile('db.json', JSON.stringify(userObj), (err) => {
    //     if (err) throw err;
    //     res.end('Saved!');
    // });

    fs.readFile('db.json', (err, data) => {
        const dbData = JSON.parse(data.toString());
        if (dbData.users.email === email && dbData.users.password === password)
            res.end(JSON.stringify({ token: `Log-Token-${Math.random() * 1000}` }));
        else res.end('login failed');
    });
};
