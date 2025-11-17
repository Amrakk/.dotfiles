// VimKeybinds.js
var keybinds = {
    children: [
        // Column 1
        {
            children: [
                {
                    name: "Cursor movement",
                    keybinds: [
                        { mods: [], key: "h / j / k / l", comment: "left / down / up / right" },
                        { mods: [], key: "H / M / L", comment: "top / middle / bottom of screen" },
                        { mods: [], key: "w / W", comment: "next word / WORD" },
                        { mods: [], key: "e / E", comment: "end of word / WORD" },
                        { mods: [], key: "b / B", comment: "prev word / WORD" },
                        { mods: [], key: "0 / ^ / $", comment: "start / first nonblank / end" },
                        { mods: [], key: "gg / G / [n]G", comment: "first / last / go to line n" },
                        { mods: [], key: "f[x] / F[x]", comment: "jump to / before x" },
                        { mods: [], key: "t[x] / T[x]", comment: "jump till / after x" },
                        { mods: [], key: "; / ,", comment: "repeat / reverse last f/t" },
                        { mods: [], key: "} / {", comment: "next / prev block or paragraph" },
                        { mods: [], key: "%", comment: "match bracket" },
                        { mods: [], key: "z[t / z / b]", comment: "scroll top / center / bottom" },
                        { mods: ["Ctrl"], key: "b / f / d / u", comment: "scroll up / down full / half" },
                    ],
                },
                {
                    name: "Insert / Append",
                    keybinds: [
                        { mods: [], key: "i / I", comment: "insert before / at line start" },
                        { mods: [], key: "a / A", comment: "append after / at line end" },
                        { mods: [], key: "o / O", comment: "open below / above" },
                        { mods: ["Ctrl"], key: "h", comment: "delete char before" },
                        { mods: ["Ctrl"], key: "w", comment: "delete word before" },
                        { mods: ["Ctrl"], key: "j", comment: "insert line break" },
                        { mods: ["Ctrl"], key: "t / d", comment: "indent / de-indent line" },
                        { mods: ["Ctrl"], key: "n / p", comment: "complete next / prev" },
                        { mods: ["Ctrl", "r"], key: "x", comment: "insert register x" },
                        { mods: ["Ctrl", "o"], key: "x", comment: "temp normal mode for cmd x" },
                    ],
                },
            ],
        },

        // Column 2
        {
            children: [
                {
                    name: "Editing",
                    keybinds: [
                        { mods: [], key: "r / R", comment: "replace char / mode" },
                        { mods: [], key: "J / gJ", comment: "join lines with / without space" },
                        { mods: [], key: "g[u / U / ~][M]", comment: "case lower / upper / invert" },
                        { mods: [], key: "(n)cc / c(a / i)[M]", comment: "change line / motion" },
                        { mods: [], key: "s / S", comment: "sub char / line" },
                        { mods: [], key: "xp", comment: "swap letters" },
                        { mods: [], key: "u / Ctrl+r", comment: "undo / redo" },
                        { mods: [], key: ".", comment: "repeat last cmd" },
                    ],
                },
                {
                    name: "Cut and paste",
                    keybinds: [
                        { mods: [], key: "Y / D", comment: "yank / delete to end of line" },
                        { mods: [], key: "(n)yy / y(a / i)[M]", comment: "yank lines / motion" },
                        { mods: [], key: "(n)dd / d(a / i)[M]", comment: "delete lines / motion" },
                        { mods: [], key: "(g)p / (g)P", comment: "paste after / before (g: keep cursor)" },
                        { mods: [], key: "x / X", comment: "del char under / before" },
                        { mods: [], key: ":[n1],[n2][d / y]", comment: "del / yank range ('.' cur, '$' last)" },
                    ],
                },
                {
                    name: "Visual mode",
                    keybinds: [
                        { mods: [], key: "v / V / Ctrl+v", comment: "char / line / block mode" },
                        { mods: [], key: "o / O", comment: "other end / corner" },
                        { mods: [], key: "aw / [a / i][b / B / t]", comment: "select word / () / {} / <>" },
                        { mods: [], key: "u / U / ~", comment: "lower / upper / invert case" },
                        { mods: [], key: "> / <", comment: "indent / de-indent" },
                    ],
                },
                {
                    name: "Macros",
                    keybinds: [
                        { mods: [], key: "q[x] / q", comment: "record / stop macro x" },
                        { mods: [], key: "@[x] / @@", comment: "run macro x / last macro" },
                    ],
                },
            ],
        },

        // Column 3
        {
            children: [
                {
                    name: "Search",
                    keybinds: [
                        { mods: [], key: "/ / ? / \\v", comment: "search fwd / back / regex" },
                        { mods: [], key: "n / N", comment: "repeat search fwd / back" },
                        { mods: [], key: ":%s/old/new/g[c]", comment: "replace all / confirm" },
                        { mods: [], key: ":vim /pattern/ {file}", comment: "search in files" },
                        { mods: [], key: ":cn / :cp", comment: "next / prev match" },
                        { mods: [], key: ":cope[n] / :ccl", comment: "open / close quickfix" },
                    ],
                },
                {
                    name: "Marks and positions",
                    keybinds: [
                        { mods: [], key: ":marks", comment: "list marks" },
                        { mods: [], key: "m[a-z]", comment: "set mark a-z" },
                        { mods: [], key: "[` / '][a-z]", comment: "jump to mark a-z" },
                        { mods: [], key: '`[0 / " / . / `]', comment: "last exit / edit / change / jump" },
                        { mods: [], key: ":ju", comment: "list jumps" },
                        { mods: ["Ctrl"], key: "i / o", comment: "newer / older jump" },
                        { mods: [], key: ":changes", comment: "list changes" },
                        { mods: [], key: "g[, / ;]", comment: "newer / older change" },
                    ],
                },
                {
                    name: "Registers",
                    keybinds: [
                        { mods: [], key: ":reg", comment: "show registers" },
                        { mods: [], key: '"[x][y / p]', comment: "yank / paste register x" },
                        { mods: [], key: '"+[y / p]', comment: "yank / paste clipboard" },
                        { mods: [], key: '": / "/ / "% / "#', comment: "last cmd / search / file / alt file" },
                        { mods: [], key: '"0 / "- / "=', comment: "last yank / small del / expr" },
                    ],
                },
            ],
        },

        // Column 4
        {
            children: [
                {
                    name: "Tabs",
                    keybinds: [
                        { mods: [], key: ":tabnew {file}", comment: "open new tab" },
                        { mods: ["Ctrl", "w"], key: "T", comment: "split to tab" },
                        { mods: [], key: "gt / gT", comment: "next / prev tab" },
                        { mods: [], key: ":tabn / :tabp", comment: "next / prev tab cmd" },
                        { mods: [], key: "[n]gt", comment: "go to tab n" },
                        { mods: [], key: ":tabm [n]", comment: "move tab to pos n" },
                        { mods: [], key: ":tabc / :tabo", comment: "close tab / others" },
                        { mods: [], key: ":tabdo {cmd}", comment: "run cmd on all tabs" },
                    ],
                },
                {
                    name: "Files / Windows",
                    keybinds: [
                        { mods: [], key: ":e {file}", comment: "edit file" },
                        { mods: [], key: ":bn / :bp", comment: "next / prev buffer" },
                        { mods: [], key: ":bd", comment: "delete buffer" },
                        { mods: [], key: ":b# / :b {file}", comment: "go to buffer" },
                        { mods: [], key: ":ls / :buffers", comment: "list buffers" },
                        { mods: [], key: ":sp / :vs {file}", comment: "split horiz / vert" },
                        { mods: [], key: ":vert ba / :tab ba", comment: "edit all buffers vert / tab" },
                        {
                            mods: ["Ctrl", "w"],
                            key: "s / v / w / q / x / =",
                            comment: "split / vsplit / switch / quit / swap / equal",
                        },
                        { mods: ["Ctrl", "w"], key: "h / l / j / k", comment: "move left / right / down / up" },
                        { mods: ["Ctrl", "w"], key: "H / L / J / K", comment: "move full left / right / bottom / top" },
                    ],
                },
                {
                    name: "Useful",
                    keybinds: [
                        { mods: [], key: ":help {topic}", comment: "open help" },
                        { mods: ["Ctrl"], key: "a / x", comment: "increment / decrement number" },
                        { mods: [], key: ":%!sort", comment: "sort lines alphabetically" },
                    ],
                },
            ],
        },
    ],
};
