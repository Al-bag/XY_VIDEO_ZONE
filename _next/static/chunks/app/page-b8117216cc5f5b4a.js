(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        9619: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 4123))
        },
        4123: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return _
                }
            });
            var a = t(7437),
                l = t(2265);
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                n = (...e) => e.filter((e, s, t) => !!e && t.indexOf(e) === s).join(" ");
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let c = (0, l.forwardRef)(({
                    color: e = "currentColor",
                    size: s = 24,
                    strokeWidth: t = 2,
                    absoluteStrokeWidth: a,
                    className: r = "",
                    children: c,
                    iconNode: o,
                    ...d
                }, x) => (0, l.createElement)("svg", {
                    ref: x,
                    ...i,
                    width: s,
                    height: s,
                    stroke: e,
                    strokeWidth: a ? 24 * Number(t) / Number(s) : t,
                    className: n("lucide", r),
                    ...d
                }, [...o.map(([e, s]) => (0, l.createElement)(e, s)), ...Array.isArray(c) ? c : [c]])),
                o = (e, s) => {
                    let t = (0, l.forwardRef)(({
                        className: t,
                        ...a
                    }, i) => (0, l.createElement)(c, {
                        ref: i,
                        iconNode: s,
                        className: n(`lucide-${r(e)}`, t),
                        ...a
                    }));
                    return t.displayName = `${e}`, t
                },
                d = o("Play", [
                    ["polygon", {
                        points: "6 3 20 12 6 21 6 3",
                        key: "1oa8hb"
                    }]
                ]),
                x = o("Eye", [
                    ["path", {
                        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
                        key: "1nclc0"
                    }],
                    ["circle", {
                        cx: "12",
                        cy: "12",
                        r: "3",
                        key: "1v7zrd"
                    }]
                ]),
                m = o("Calendar", [
                    ["path", {
                        d: "M8 2v4",
                        key: "1cmpym"
                    }],
                    ["path", {
                        d: "M16 2v4",
                        key: "4m81vk"
                    }],
                    ["rect", {
                        width: "18",
                        height: "18",
                        x: "3",
                        y: "4",
                        rx: "2",
                        key: "1hopcy"
                    }],
                    ["path", {
                        d: "M3 10h18",
                        key: "8toen8"
                    }]
                ]);

            function h(e) {
                var s, t;
                let {
                    video: l,
                    onClick: r
                } = e;
                return (0, a.jsxs)("div", {
                    onClick: r,
                    className: "group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10",
                    children: [(0, a.jsxs)("div", {
                        className: "relative",
                        children: [(0, a.jsx)("img", {
                            src: l.thumbnailUrl,
                            alt: l.title,
                            className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        }), (0, a.jsx)("div", {
                            className: "absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
                        }), (0, a.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: (0, a.jsx)("div", {
                                className: "w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm",
                                children: (0, a.jsx)(d, {
                                    className: "w-6 h-6 text-white ml-1"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded",
                            children: l.duration
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "p-6",
                        children: [(0, a.jsx)("h3", {
                            className: "text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2",
                            children: l.title
                        }), (0, a.jsx)("p", {
                            className: "text-slate-400 text-sm mb-3 line-clamp-2",
                            children: l.description
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-slate-500 mb-3",
                            children: [(0, a.jsx)("span", {
                                className: "font-medium",
                                children: l.author
                            }), (0, a.jsx)("span", {
                                className: "bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full",
                                children: l.category
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center justify-between text-sm text-slate-500",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [(0, a.jsx)(x, {
                                    className: "w-4 h-4"
                                }), (0, a.jsxs)("span", {
                                    children: [(s = l.views) >= 1e6 ? "".concat((s / 1e6).toFixed(1), "M") : s >= 1e3 ? "".concat((s / 1e3).toFixed(1), "K") : s.toString(), " views"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [(0, a.jsx)(m, {
                                    className: "w-4 h-4"
                                }), (0, a.jsx)("span", {
                                    children: (t = l.uploadDate, new Date(t).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    }))
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-wrap gap-1 mt-3",
                            children: [l.tags.slice(0, 3).map((e, s) => (0, a.jsxs)("span", {
                                className: "text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full",
                                children: ["#", e]
                            }, s)), l.tags.length > 3 && (0, a.jsxs)("span", {
                                className: "text-xs text-slate-500",
                                children: ["+", l.tags.length - 3, " more"]
                            })]
                        })]
                    })]
                })
            }

            function u(e) {
                let {
                    videos: s,
                    onVideoSelect: t
                } = e;
                return 0 === s.length ? (0, a.jsxs)("div", {
                    className: "text-center py-16",
                    children: [(0, a.jsx)("div", {
                        className: "w-24 h-24 mx-auto mb-4 rounded-full bg-slate-700 flex items-center justify-center",
                        children: (0, a.jsx)("span", {
                            className: "text-3xl",
                            children: "\uD83D\uDCF9"
                        })
                    }), (0, a.jsx)("h3", {
                        className: "text-xl font-semibold text-slate-300 mb-2",
                        children: "No videos found"
                    }), (0, a.jsx)("p", {
                        className: "text-slate-400",
                        children: "Try adjusting your search terms"
                    })]
                }) : (0, a.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: s.map(e => (0, a.jsx)(h, {
                        video: e,
                        onClick: () => t(e)
                    }, e.id))
                })
            }
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let p = o("X", [
                    ["path", {
                        d: "M18 6 6 18",
                        key: "1bl5f8"
                    }],
                    ["path", {
                        d: "m6 6 12 12",
                        key: "d8bk6v"
                    }]
                ]),
                f = o("Tag", [
                    ["path", {
                        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
                        key: "vktsd0"
                    }],
                    ["circle", {
                        cx: "7.5",
                        cy: "7.5",
                        r: ".5",
                        fill: "currentColor",
                        key: "kqv944"
                    }]
                ]);

            function v(e) {
                var s, t;
                let {
                    video: r,
                    onClose: n
                } = e;
                return (0, l.useEffect)(() => (document.body.style.overflow = "hidden", () => {
                    document.body.style.overflow = "unset"
                }), []), (0, a.jsx)("div", {
                    className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
                    children: (0, a.jsxs)("div", {
                        className: "bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-slate-700",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center justify-between p-4 border-b border-slate-700",
                            children: [(0, a.jsx)("h2", {
                                className: "text-xl font-semibold text-white truncate pr-4",
                                children: r.title
                            }), (0, a.jsx)("button", {
                                onClick: n,
                                className: "p-2 hover:bg-slate-700 rounded-lg transition-colors",
                                children: (0, a.jsx)(p, {
                                    className: "w-6 h-6 text-slate-400"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col lg:flex-row",
                            children: [(0, a.jsx)("div", {
                                className: "lg:w-2/3",
                                children: (0, a.jsx)("div", {
                                    className: "aspect-video bg-black relative",
                                    children: (0, a.jsxs)("video", {
                                        controls: !0,
                                        autoPlay: !0,
                                        controlsList: "nodownload",
                                        className: "w-full h-full",
                                        poster: r.thumbnailUrl,
                                        children: [(0, a.jsx)("source", {
                                            src: r.videoUrl,
                                            type: "video/mp4"
                                        }), "Your browser does not support the video tag."]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "lg:w-1/3 p-6 overflow-y-auto max-h-[60vh]",
                                children: (0, a.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("h3", {
                                            className: "text-lg font-semibold text-white mb-2",
                                            children: r.title
                                        }), (0, a.jsx)("p", {
                                            className: "text-slate-300 text-sm leading-relaxed",
                                            children: r.description
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2 text-sm text-slate-400",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-medium text-slate-300",
                                                children: "Author:"
                                            }), (0, a.jsx)("span", {
                                                children: r.author
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2 text-sm text-slate-400",
                                            children: [(0, a.jsx)(x, {
                                                className: "w-4 h-4"
                                            }), (0, a.jsxs)("span", {
                                                children: [(s = r.views) >= 1e6 ? "".concat((s / 1e6).toFixed(1), "M") : s >= 1e3 ? "".concat((s / 1e3).toFixed(1), "K") : s.toString(), " views"]
                                            }), (0, a.jsx)("span", {
                                                children: "•"
                                            }), (0, a.jsx)(m, {
                                                className: "w-4 h-4"
                                            }), (0, a.jsx)("span", {
                                                children: (t = r.uploadDate, new Date(t).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                }))
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2 text-sm text-slate-400",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-medium text-slate-300",
                                                children: "Duration:"
                                            }), (0, a.jsx)("span", {
                                                children: r.duration
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2 text-sm text-slate-400",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-medium text-slate-300",
                                                children: "Category:"
                                            }), (0, a.jsx)("span", {
                                                className: "bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full",
                                                children: r.category
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2 mb-2",
                                            children: [(0, a.jsx)(f, {
                                                className: "w-4 h-4 text-slate-400"
                                            }), (0, a.jsx)("span", {
                                                className: "font-medium text-slate-300 text-sm",
                                                children: "Tags"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: r.tags.map((e, s) => (0, a.jsxs)("span", {
                                                className: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full hover:bg-slate-600 transition-colors cursor-pointer",
                                                children: ["#", e]
                                            }, s))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let j = o("Calculator", [
                    ["rect", {
                        width: "16",
                        height: "20",
                        x: "4",
                        y: "2",
                        rx: "2",
                        key: "1nb95v"
                    }],
                    ["line", {
                        x1: "8",
                        x2: "16",
                        y1: "6",
                        y2: "6",
                        key: "x4nwl0"
                    }],
                    ["line", {
                        x1: "16",
                        x2: "16",
                        y1: "14",
                        y2: "18",
                        key: "wjye3r"
                    }],
                    ["path", {
                        d: "M16 10h.01",
                        key: "1m94wz"
                    }],
                    ["path", {
                        d: "M12 10h.01",
                        key: "1nrarc"
                    }],
                    ["path", {
                        d: "M8 10h.01",
                        key: "19clt8"
                    }],
                    ["path", {
                        d: "M12 14h.01",
                        key: "1etili"
                    }],
                    ["path", {
                        d: "M8 14h.01",
                        key: "6423bh"
                    }],
                    ["path", {
                        d: "M12 18h.01",
                        key: "mhygvu"
                    }],
                    ["path", {
                        d: "M8 18h.01",
                        key: "lrp35t"
                    }]
                ]),
                b = o("House", [
                    ["path", {
                        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
                        key: "5wwlr5"
                    }],
                    ["path", {
                        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                        key: "1d0kgt"
                    }]
                ]),
                y = o("TrendingUp", [
                    ["polyline", {
                        points: "22 7 13.5 15.5 8.5 10.5 2 17",
                        key: "126l90"
                    }],
                    ["polyline", {
                        points: "16 7 22 7 22 13",
                        key: "kwv8wd"
                    }]
                ]),
                N = o("User", [
                    ["path", {
                        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                        key: "975kel"
                    }],
                    ["circle", {
                        cx: "12",
                        cy: "7",
                        r: "4",
                        key: "17ys0d"
                    }]
                ]);

            function g() {
                return (0, a.jsx)("header", {
                    className: "sticky top-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700",
                    children: (0, a.jsx)("div", {
                        className: "container mx-auto px-4 py-4",
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, a.jsx)(j, {
                                    className: "w-8 h-8 text-blue-400"
                                }), (0, a.jsx)("span", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent",
                                    children: "XY_ZONE"
                                })]
                            }), (0, a.jsxs)("nav", {
                                className: "hidden md:flex items-center space-x-6",
                                children: [(0, a.jsxs)("a", {
                                    href: "#",
                                    className: "flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors",
                                    children: [(0, a.jsx)(b, {
                                        className: "w-4 h-4"
                                    }), (0, a.jsx)("span", {
                                        children: "Home"
                                    })]
                                }), (0, a.jsxs)("a", {
                                    href: "#",
                                    className: "flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors",
                                    children: [(0, a.jsx)(y, {
                                        className: "w-4 h-4"
                                    }), (0, a.jsx)("span", {
                                        children: "Trending"
                                    })]
                                }), (0, a.jsxs)("a", {
                                    href: "#",
                                    className: "flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors",
                                    children: [(0, a.jsx)(N, {
                                        className: "w-4 h-4"
                                    }), (0, a.jsx)("span", {
                                        children: "Profile"
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            /**
             * @license lucide-react v0.446.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let w = o("Search", [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8",
                    key: "4ej97u"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3",
                    key: "1qie3q"
                }]
            ]);

            function k(e) {
                let {
                    onSearch: s,
                    searchTerm: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "max-w-2xl mx-auto mb-12",
                    children: (0, a.jsxs)("div", {
                        className: "relative",
                        children: [(0, a.jsx)(w, {
                            className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"
                        }), (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Search videos, topics, or authors...",
                            value: t,
                            onChange: e => s(e.target.value),
                            className: "w-full pl-12 pr-12 py-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                        }), t && (0, a.jsx)("button", {
                            onClick: () => {
                                s("")
                            },
                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors",
                            children: (0, a.jsx)(p, {
                                className: "w-5 h-5"
                            })
                        })]
                    })
                })
            }
            let C = [{
                id: "1",
                title: "Demo",
                description: "A demo description.",
                videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                thumbnailUrl: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=800",
                duration: "10:00",
                views: 10000,
                uploadDate: "2025-12-28",
                tags: ["Demo", "Demo", "Demo", "Demo", "Demo"],
                author: "Demo Author",
                category: "Demo Video"
            },
            {
                id: "2",
                title: "Demo",
                description: "A demo description.",
                videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                thumbnailUrl: "https://picsum.photos/seed/picsum/200/300",
                duration: "10:00",
                views: 10000,
                uploadDate: "2025-12-28",
                tags: ["Demo", "Demo", "Demo", "Demo", "Demo"],
                author: "Demo Author",
                category: "Demo Video"
            }];

            function _() {
                let [e, s] = (0, l.useState)(null), [t, r] = (0, l.useState)(""), [n, i] = (0, l.useState)(C);
                return (0, a.jsxs)("div", {
                    className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
                    children: [(0, a.jsx)(g, {}), (0, a.jsxs)("main", {
                        className: "container mx-auto px-4 py-8",
                        children: [(0, a.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [(0, a.jsx)("h1", {
                                className: "text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4",
                                children: "XY_ZONE"
                            }), (0, a.jsx)("p", {
                                className: "text-xl text-slate-300 max-w-2xl mx-auto",
                                children: "Where Just Show Sayed's Videos."
                            })]
                        }), (0, a.jsx)(k, {
                            onSearch: e => {
                                r(e);
                                let s = C.filter(s => s.title.toLowerCase().includes(e.toLowerCase()) || s.description.toLowerCase().includes(e.toLowerCase()) || s.tags.some(s => s.toLowerCase().includes(e.toLowerCase())));
                                i(s)
                            },
                            searchTerm: t
                        }), (0, a.jsx)("div", {
                            className: "mb-6",
                            children: (0, a.jsxs)("p", {
                                className: "text-slate-400",
                                children: ["Showing ", n.length, " ", 1 === n.length ? "video" : "videos", t && ' for "'.concat(t, '"')]
                            })
                        }), (0, a.jsx)(u, {
                            videos: n,
                            onVideoSelect: e => {
                                s(e)
                            }
                        })]
                    }), e && (0, a.jsx)(v, {
                        video: e,
                        onClose: () => {
                            s(null)
                        }
                    })]
                })
            }
        },
        622: function(e, s, t) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var a = t(2265),
                l = Symbol.for("react.element"),
                r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
                n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                i = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, s, t) {
                var a, c = {},
                    o = null,
                    d = null;
                for (a in void 0 !== t && (o = "" + t), void 0 !== s.key && (o = "" + s.key), void 0 !== s.ref && (d = s.ref), s) r.call(s, a) && !i.hasOwnProperty(a) && (c[a] = s[a]);
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps) void 0 === c[a] && (c[a] = s[a]);
                return {
                    $$typeof: l,
                    type: e,
                    key: o,
                    ref: d,
                    props: c,
                    _owner: n.current
                }
            }
            s.jsx = c, s.jsxs = c
        },
        7437: function(e, s, t) {
            "use strict";
            e.exports = t(622)
        }
    },
    function(e) {
        e.O(0, [971, 864, 744], function() {
            return e(e.s = 9619)
        }), _N_E = e.O()
    }
]);
