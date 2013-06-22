var jsonxml = require('jsontoxml');

exports.message = function (req, res) {
    console.log('Request message');
    console.log(req.body);
    console.log('\n');

    var t = new Date();
    var xml = jsonxml({
        xml: [
            {
                ToUserName: jsonxml.cdata(req.body.xml.FromUserName[0])
            },
            {
                FromUserName: jsonxml.cdata(req.body.xml.ToUserName[0])
            },
            {
                CreateTime: Math.round(t.getTime() / 1000)
            },
            {
                MsgType: jsonxml.cdata('music')
            },
            {
                Music: [
                    {
                        Title: jsonxml.cdata('来段音乐放松一下吧')
                    },
                    {
                        Description: jsonxml.cdata('')
                    },
                    {
                        MusicUrl: jsonxml.cdata('http://qy.compass.onqy.bbzx.wuxi.cn/MyImages/2011-9/79ff9cc8-9581-4097-96c0-19a32922d89f.mp3')
                    },
                    {
                        HQMusicUrl: jsonxml.cdata('http://qy.compass.onqy.bbzx.wuxi.cn/MyImages/2011-9/79ff9cc8-9581-4097-96c0-19a32922d89f.mp3')
                    }
                ]
            },
            {
                FuncFlag: 0
            }
        ]
    });

    console.log('Respond message\n' + xml);
    res.send(xml);
};